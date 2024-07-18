<template>
  <div class="Music">
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
          <img v-if="store.getInnerWidth > 720" :src="addMusic" />
        </div>
      </div>
    </div>
    <MusicPlayer :playMusic="playMusic" @audioEnded="audioEnded"></MusicPlayer>
  </div>
</template>
<script setup>
import { onMounted, nextTick, ref } from 'vue';
import { mainStore } from '@/store';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import playGreen from './image/playGreen.png';
import addMusic from './image/addMusic.png';

// 音乐播放器
import MusicPlayer from './musicPlay.vue';

// 获取数据方法
import { getHotLists } from '@/api';

import 'swiper/swiper-bundle.min.css';

const fontMusicStr = 'https://website-image-as.oss-cn-beijing.aliyuncs.com/music/';

const store = mainStore();

const musicList = ref();
const phoneValue = ref(0)

// 收藏歌单
const favoreter = ref([
  {
    title: '我们的爱',
    url: `${fontMusicStr}welove.mp4`,
    index: 0,
  },
]);

// 混淆歌单
const qyMusicList = ref([
  {
    title: '我们的爱',
    url: `${fontMusicStr}welove.mp4`,
    index: 0,
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

// 切换歌单
const handleChangeMusicMenu = (value) => {
  if (Number(value) === 0) {
    // 抖音歌单
    musicList.value = store.getDyMusicList;
    playMusic.value = store.getDyMusicList[0];
  } else if (Number(value) === 1) {
    // 收藏歌单
    musicList.value = favoreter.value;
    playMusic.value = favoreter.value[0];
  } else if (Number(value) === 2) {
    // 混淆歌单
    musicList.value = qyMusicList.value;
    playMusic.value = qyMusicList.value[0];
  } else {
    // 当前歌单
    musicList.value = currentMusicList.value;
    playMusic.value = currentMusicList.value[0];
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
});
</script>
<style lang="scss" scoped>
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
    margin: auto;
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
    margin-top: 20px;
  }

  .swiper-container-wrapper {
    position: relative;
  }

  .swiper-pagination-wrapper {
    text-align: center;
    margin-top: 10px;
  }

  .swiper-pagination {
    display: inline-block;
    position: static !important;
  }
  .musicList {
    height: 48vh;
    overflow: auto;
  }

  .phoneMusicScroll {
    height: 70vh;
  }
}
</style>
