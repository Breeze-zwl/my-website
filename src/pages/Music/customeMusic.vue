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
    <div class="musicListBox" :class="store.getInnerWidth <= 720 ? 'phoneMusicBox' : ''">
    <div class="playAll" @click="handlePalyAll">
      <img :src="playAll" />
      <span>播放全部</span>
    </div>
      <div class="musicList" :class="store.getInnerWidth <= 720 ? 'phoneMusicScroll' : ''">
        <div
          v-for="(item, index) in musicList"
          :key="index"
          class="musicName"
          :class="index % 2 == 0 ? 'gmask' : ''"
          @click="handleChangeMusicList(item)"
        >
          <span>{{ index + 1 }}</span>
          <span>{{ item.title }}</span>
          <img v-if="store.getInnerWidth > 720" :src="playGreen" @click="handleChangeMusicList(item)" />
          <img v-if="store.getInnerWidth > 720" :src="addMusic" @click.stop="addMusicList(item)" />
        </div>
      </div>
    </div>
    <MusicPlayer :playMusic="playMusic" @audioEnded="audioEnded" ref="musicPlayer"></MusicPlayer>
    <div class="musicdanceBox" :class="store.getInnerWidth <= 720 ? 'canvasPhone' : ''">
      <musicdance :audioDom="audioDom" :musicPlayer="musicPlayer"></musicdance>
    </div>
  </div>
</template>
<script setup>
import { onMounted, nextTick, ref, provide } from 'vue';
import { mainStore } from '@/store';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import playGreen from './image/playGreen.png';
import addMusic from './image/addMusic.png';
import playAll from './image/playAll.png'

// 音乐播放器
import MusicPlayer from './musicPlay.vue';

//音谱跳动
import musicdance from './musicdance.vue';

// 获取数据方法
import { getHotLists } from '@/api';

import 'swiper/swiper-bundle.min.css';

const fontMusicStr = 'https://website-image-as.oss-cn-beijing.aliyuncs.com/music/';

const store = mainStore();

const musicList = ref();
const phoneValue = ref(0)
const musicPlayer = ref()
const audioDom = ref()

// 收藏歌单
const favoreter = ref([
  {
    title: '人生',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E4%BA%BA%E7%94%9F.m4a`,
    index: 0,
    type: 'mp4'
  },
  {
    title: '关山酒dj',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E5%85%B3%E5%B1%B1%E9%85%92dj.m4a`,
    index: 1,
    type: 'mp4'
  },
  {
    title: '回忆总是慢动作',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E5%9B%9E%E5%BF%86%E6%80%BB%E6%98%AF%E6%85%A2%E5%8A%A8%E4%BD%9C.m4a`,
    index: 2,
    type: 'mp4'
  },
  {
    title: '多雷 - 泡沫 (Swang Remix) ',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E5%A4%9A%E9%9B%B7%20-%20%E6%B3%A1%E6%B2%AB%20%28Swang%20Remix%29%20%5Bmqms2%5D%281%29.mp3`,
    index: 3,
    type: 'mp3'
  },
  {
    title: '完美',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E5%AE%8C%E7%BE%8E.m4a`,
    index: 4,
    type: 'mp4'
  },
  {
    title: '小河淌水1952',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E5%B0%8F%E6%B2%B3%E6%B7%8C%E6%B0%B41952.m4a`,
    index: 5,
    type: 'mp4'
  },
  {
    title: '我们的爱',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B1.mp4`,
    index: 6,
    type: 'mp4'
  },
  {
    title: '我又一个人出发了',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E6%88%91%E5%8F%88%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%87%BA%E5%8F%91%E4%BA%86.m4a`,
    index: 7,
    type: 'mp4'
  },
  {
    title: '是想你的声音啊',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E6%98%AF%E6%83%B3%E4%BD%A0%E7%9A%84%E5%A3%B0%E9%9F%B3%E5%95%8A.m4a`,
    index: 8,
    type: 'mp4'
  },
  {
    title: '月下',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E6%9C%88%E4%B8%8B.m4a`,
    index: 9,
    type: 'mp4'
  },
  {
    title: '高二三班.m4a',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E9%AB%98%E4%BA%8C%E4%B8%89%E7%8F%AD.m4a`,
    index: 10,
    type: 'mp4'
  },
]);

// 混淆歌单
const qyMusicList = ref([
{
    title: '多雷 - 泡沫 (Swang Remix) ',
    url: `https://website-image-as.oss-cn-beijing.aliyuncs.com/music/%E5%A4%9A%E9%9B%B7%20-%20%E6%B3%A1%E6%B2%AB%20%28Swang%20Remix%29%20%5Bmqms2%5D%281%29.mp3`,
    index: 3,
  },
]);

// 当前歌单
const currentMusicList = ref([]);

const playMusic = ref();

const imageList = [
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg',
    desc: '抖音热歌',
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/9.jpg',
    desc: '收藏歌单',
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/4.jpg',
    desc: '混淆歌单',
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/16.jpg',
    desc: '当前歌单',
  },
];

// 添加歌单
const addMusicList = (value) => {
  store.setAddMusicList(value)
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
      // playMusic.value = musicList.value[0]
    } else {
      $message.error(res.title + res.message);
    }
  });
};

// 播放选中音乐
const handleChangeMusicList = (value) => {
  playMusic.value = value;
};

// 播放全部
const handlePalyAll = () => {
  playMusic.value = musicList.value[0];
}

// 切换歌单
const handleChangeMusicMenu = (value) => {
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

// 播放完成自动播放下一首
const audioEnded = (value) => {
  musicList.value.forEach((x, index) => {
    if (value.index === index) {
      if (value.index !== musicList.value.length - 1) {
        playMusic.value = musicList.value[index + 1];
      } else {
        playMusic.value = musicList.value[0];
      }
      // 调用子组件播放
      musicPlayer.value.playPause()
    }
  });
};

onMounted(() => {
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
  audioDom.value = musicPlayer.value.$refs.audio
});
</script>
<style lang="scss" scoped>
.phonepadding{
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
    }
    .gmask {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  .phoneMusicBox{
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
  .musicList {
    height: 46vh;
    overflow: auto;
    margin-top: 8px;
  }

  .phoneMusicScroll {
    height: 70vh;
  }

  .playAll{
    line-height: 40px;
    cursor: pointer;
    background-color: #31c27c;
    display: inline-flex;
    padding: 0 18px;
    color: white;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    img{
      width: 20px;
      height: 20px;
    }
  }
  .n-tab-pane{
    padding: 0;
  }
  .musicdanceBox{
    position: absolute;
    bottom: 18vh;
    right: 0;
  }
  .canvasPhone{
    width: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
}
</style>
