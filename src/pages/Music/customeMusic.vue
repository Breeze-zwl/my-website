<template>
  <div class="Music" :class="store.getInnerWidth <= 720 ? 'phonepadding' : ''">
    <n-tabs
      type="line"
      animated
      justify-content="space-evenly"
      v-if="store.innerWidth < 720"
      v-model:value="phoneValue"
      @update:value="handleChangeMusicMenu"
    >
      <n-tab-pane name="0" tab="抖音热歌"> </n-tab-pane>
      <n-tab-pane name="1" tab="收藏歌单"> </n-tab-pane>
      <n-tab-pane name="2" tab="混淆歌单"> </n-tab-pane>
      <n-tab-pane name="3" tab="当前歌单"> </n-tab-pane>
    </n-tabs>
    <div class="PCmusicList" v-show="store.innerWidth >= 720">
      <div class="swiper-container-wrapper">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imageList"
              :key="index"
              @click="handleChangeMusicMenu(index)"
            >
              <div class="music_sort_box">
                <div class="listbg" :style="{ 'background-image': `url(${item.imgurl}) ` }">
                  <div class="bgMask">
                    <svg
                      t="1720756263990"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      p-id="6461"
                      width="40"
                      height="40"
                    >
                      <path
                        d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m196.546667 500.493333l-266.666667 176A37.333333 37.333333 0 0 1 384 688V336.033333a37.333333 37.333333 0 0 1 57.893333-31.16l266.666667 176a37.333333 37.333333 0 0 1 0 62.32z"
                        fill="#ffffff"
                        p-id="6462"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>{{ item.desc }}</div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="swiper-pagination-wrapper">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- 音乐列表 -->
    <el-skeleton :loading="loadingMusic" animated :rows="8">
      <div class="musicListBox" :class="store.getInnerWidth <= 720 ? 'phoneMusicBox' : ''">
        <div class="playAll" @click="handlePalyAll">
          <img :src="playAll" />
          <span>播放全部</span>
        </div>
        <div class="postToremMusicList" :class="store.getInnerWidth <= 720 ? 'phoneMusicScroll' : ''">
          <div
            v-for="(item, index) in musicList"
            :key="index"
            class="musicName"
            :class="index % 2 == 0 ? 'gmask' : ''"
            @click="handleChangeMusicList(item)"
          >
            <span>{{ index + 1 }}</span>
            <span>{{ item.title }}</span>
            <img
              v-if="store.getInnerWidth <= 720 && phoneValue !== '3'"
              class="addCurrentMusic"
              :src="addmusicmobile"
              @click.stop="addMusicList(item)"
            />
            <img
              v-if="store.getInnerWidth <= 720 && phoneValue === '3'"
              class="addCurrentMusic"
              :src="reducemusic"
              @click.stop="reduceMusicList(item)"
            />
            <img
              v-if="store.getInnerWidth > 720"
              :src="playGreen"
              @click="handleChangeMusicList(item)"
            />
            <img
              v-if="store.getInnerWidth > 720 && pcActive !== 3"
              :src="addMusic"
              @click.stop="addMusicList(item)"
            />
            <img
              class="pcReduceClass"
              v-if="store.getInnerWidth > 720 && pcActive === 3"
              :src="reducemusic"
              @click.stop="reduceMusicList(item)"
            />
          </div>
        </div>
      </div>
    </el-skeleton>
    <MusicPlayer :playMusic="playMusic" @audioEnded="audioEnded" ref="musicPlayer"></MusicPlayer>
    <div class="musicdanceBox" :class="store.getInnerWidth <= 720 ? 'canvasPhone' : ''">
      <musicdance :audioDom="audioDom" :musicPlayer="musicPlayer"></musicdance>
    </div>
  </div>
</template>
<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { mainStore } from '@/store';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import playGreen from './image/playGreen.png';
import addMusic from './image/addMusic.png';
import playAll from './image/playAll.png';
import addmusicmobile from './image/addmusicmobile.png';
import reducemusic from './image/reducemusic.png';

import listObjects from '@/api/getOssMusic';

// 音乐播放器
import MusicPlayer from './musicPlay.vue';

//音谱跳动
import musicdance from './musicdance.vue';

// 获取数据方法
import { getHotLists } from '@/api';

import 'swiper/swiper-bundle.min.css';

const store = mainStore();

const musicList = ref();
const phoneValue = ref(0);
const musicPlayer = ref();
const audioDom = ref();
const loadingMusic = ref(true);
const pcActive = ref()

// 收藏歌单
const favoreter = ref();

// 剪辑歌单
const qyMusicList = ref();

// 当前歌单
const currentMusicList = ref([]);

const playMusic = ref();

const imageList = [
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg',
    desc: '抖音热歌',
    index: '0'
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/9.jpg',
    desc: '收藏歌单',
    index: '1'
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/4.jpg',
    desc: '剪辑歌单',
    index: '2'
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/16.jpg',
    desc: '当前歌单',
    index: '3'
  },
];

// 添加歌单
const addMusicList = (value) => {
  store.setAddMusicList(value);
};

// 减少歌单
const reduceMusicList = (value) => {
  store.setReduceMusic(value)
  musicList.value = store.getAddMusicList;
}

// 获取抖音热歌榜
const getHotListsData = (isNew = false) => {
  getHotLists('douyin_music', isNew).then((res) => {
    if (res.code === 200) {
      musicList.value = res.data.map((x, index) => {
        return {
          ...x,
          index,
        };
      });
      store.setDyMusicList(musicList.value);
    } else {
      $message.error(res.title + res.message);
    }
    loadingMusic.value = false;
  });
};

// 播放选中音乐
const handleChangeMusicList = (value) => {
  playMusic.value = value;
};

// 播放全部
const handlePalyAll = () => {
  playMusic.value = musicList.value[0];
};

// 切换歌单
const handleChangeMusicMenu = (value) => {
  pcActive.value = value
  if (Number(value) === 0) {
    // 抖音歌单
    musicList.value = store.getDyMusicList;
  } else if (Number(value) === 1) {
    // 收藏歌单
    musicList.value = favoreter.value;
  } else if (Number(value) === 2) {
    // 混淆歌单
    musicList.value = qyMusicList.value;
  } else {
    // 当前歌单
    musicList.value = store.getAddMusicList;
  }
};

// 切换上一首或者下一首
const audioEnded = (value, handle) => {
  if (handle === 'nextMusic') {
    if (musicList.value[value.index + 1]) {
      playMusic.value = musicList.value[value.index + 1];
    } else {
      playMusic.value = musicList.value[0];
    }
  } else {
    if (value.index - 1 >= 0) {
      playMusic.value = musicList.value[value.index - 1];
    } else {
      playMusic.value = musicList.value[musicList.value.length - 1];
    }
  }
};

onMounted(async () => {
  nextTick(() => {
    try {
      new Swiper('.swiper', {
        modules: [Navigation, Pagination, Scrollbar],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        slidesPerView: 4,
      });
    } catch (err) {}
  });
  getHotListsData();
  audioDom.value = musicPlayer.value.$refs.audio;
  favoreter.value = await listObjects('music');
  qyMusicList.value = await listObjects('cutMusic')
  setTimeout(()=>{
    loadingMusic.value = false;
  }, 5000)
});
</script>
<style lang="scss" scoped>
.phonepadding {
  padding-top: 0 !important;
}
.Music {
  width: 100%;
  height: 100%;
  background-color: white;
  padding-top: 40px;
  .PCmusicList {
    width: 86%;
    margin: auto;
    max-width: 1300px;
    .music_sort_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      .listbg {
        position: relative;
        width: 90%;
        aspect-ratio: 16 / 12;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 8px;
        cursor: pointer;
        background-size: 100% 100%;
        transition: background-size 0.5s;
        overflow: hidden;
        &:hover {
          background-size: 110% 110%;
        }
        .bgMask {
          position: absolute;
          width: 100%;
          height: 100%;
          svg {
            opacity: 0;
            transition: all 0.4s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.6);
            svg {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .musicListBox {
    width: 86%;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    .musicName {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 16px;
      cursor: pointer;
      span {
        margin-right: 40px;
      }
      img {
        display: none;
        margin-right: 10px;
        width: 30px;
      }
      &:hover {
        img {
          display: block;
        }
      }
      .pcReduceClass{
        width: 38px;
      }
    }
    .gmask {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  .phoneMusicBox {
    width: 100%;
  }

  .swiper-container-wrapper {
    position: relative;
  }

  .swiper-pagination-wrapper {
    text-align: center;
  }

  .swiper-pagination {
    display: inline-block;
    position: static !important;
  }
  .postToremMusicList {
    height: 280px;
    height: 44vh;
    overflow: auto;
  }

  .phoneMusicScroll {
    height: 70vh;
  }

  .playAll {
    line-height: 40px;
    cursor: pointer;
    background-color: #31c27c;
    display: inline-flex;
    padding: 0 18px;
    color: white;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    border-radius: 8px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .n-tab-pane {
    padding: 0;
  }
  .musicdanceBox {
    position: absolute;
    bottom: 18vh;
    right: 0;
  }
  .canvasPhone {
    width: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .el-skeleton {
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }

  .addCurrentMusic {
    display: block !important;
    width: 36px !important;
    margin: 0 !important;
    position: absolute;
    right: 26px;
  }
}
</style>
