<template>
  <div class="Music">
    原来音乐模块被网易云发邮件警告了，新的内容建设中。。。
    <n-tabs type="line" animated justify-content="space-evenly" v-if="store.innerWidth < 720">
      <n-tab-pane name="oasis" tab="耳机"> 耳机 </n-tab-pane>
      <n-tab-pane name="the beatles" tab="下架"> 下架 </n-tab-pane>
      <n-tab-pane name="jay chou" tab="混淆"> 混淆 </n-tab-pane>
      <n-tab-pane name="jay chou" tab="混淆"> 混淆 </n-tab-pane>
    </n-tabs>
    <div class="PCmusicList" v-show="store.innerWidth >= 720">
      <div class="swiper-container-wrapper">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imageList"
              :key="index"
              @click="handleChangeMusicList(index)"
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
    <div class="musicListBox">
      <div class="musicList">
        <div
          v-for="(item, index) in musicList"
          :key="index"
          class="musicName"
          :class="index % 2 == 0 ? 'gmask' : ''"
        >
          <span>{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
          <svg
            t="1720773627143"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            p-id="10218"
            width="30"
            height="30"
          >
            <path
              d="M512 63.015385C263.876923 63.015385 63.015385 263.876923 63.015385 512S263.876923 960.984615 512 960.984615c248.123077 0 448.984615-200.861538 448.984615-448.984615S760.123077 63.015385 512 63.015385z m0 838.892307c-212.676923 0-389.907692-173.292308-389.907692-389.907692S299.323077 122.092308 512 122.092308s389.907692 173.292308 389.907692 389.907692-177.230769 389.907692-389.907692 389.907692z"
              fill="#31c27c"
              p-id="10219"
            ></path>
            <path
              d="M484.430769 334.769231c-7.876923-3.938462-15.753846-7.876923-23.630769-7.876923-19.692308 0-35.446154 15.753846-35.446154 35.446154v299.323076c0 7.876923 3.938462 15.753846 7.876923 23.63077 11.815385 15.753846 35.446154 19.692308 51.2 7.876923l196.923077-149.661539c7.876923-7.876923 15.753846-19.692308 15.753846-31.507692 0-11.815385-3.938462-23.630769-15.753846-31.507692l-196.923077-145.723077z m-3.938461 287.507692v-224.492308L630.153846 512l-149.661538 110.276923zM697.107692 512z"
              fill="#31c27c"
              p-id="10220"
            ></path>
          </svg>
          <svg
            t="1720773784823"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            p-id="12091"
            width="26"
            height="26"
          >
            <path
              d="M512 0C229.7 0 0 229.7 0 512s229.7 512 512 512 512-229.7 512-512S794.3 0 512 0z m0 979.5C254.2 979.5 44.5 769.8 44.5 512S254.2 44.5 512 44.5 979.5 254.2 979.5 512 769.8 979.5 512 979.5z"
              fill="#31c27c"
              p-id="12092"
            ></path>
            <path
              d="M779.2 489.7H534.3V244.9c0-12.3-10.1-22.3-22.3-22.3-12.3 0-22.3 10.1-22.3 22.3v244.8H244.9c-12.3 0-22.3 10.1-22.3 22.3 0 12.3 10.1 22.3 22.3 22.3h244.8v244.9c0 12.3 10.1 22.3 22.3 22.3 12.3 0 22.3-10.1 22.3-22.3V534.3h244.8c12.3 0 22.3-10.1 22.4-22.3 0-12.3-10.1-22.3-22.3-22.3z"
              fill="#31c27c"
              p-id="12093"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <MusicPlayer />
  </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue';
import { mainStore } from '@/store';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import MusicPlayer from './musicPlay.vue';
import 'swiper/swiper-bundle.min.css';

const fontMusicStr = 'https://website-image-as.oss-cn-beijing.aliyuncs.com/music/';

const store = mainStore();

const musicList = [
  {
    name: '我们的爱',
    url: `${fontMusicStr}welove.mp4`,
  },
  {
    name: '我们的爱',
    url: `${fontMusicStr}welove.mp4`,
  },
  {
    name: '我们的爱',
    url: `${fontMusicStr}welove.mp4`,
  },
  {
    name: '我们的爱',
    url: `${fontMusicStr}welove.mp4`,
  },
];

const imageList = [
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg',
    desc: '抖音剪辑歌曲',
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/9.jpg',
    desc: '比较high的歌',
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/4.jpg',
    desc: '全部歌曲',
  },
  {
    imgurl: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/16.jpg',
    desc: '当前列表',
  },
];

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
});
const handleChangeMusicList = (val) => {
  console.log(val);
};
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
    width: 40%;
    margin-left: 7%;
    .musicName {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 16px;
      cursor: pointer;
      span{
        margin-right: 40px;
      }
      svg {
        display: none;
        margin-right: 10px;
      }
      &:hover {
        svg {
          display: block;
        }
      }
    }
    .gmask {
      background-color: rgba(0, 0, 0, 0.02);
    }
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
}
</style>
