<template>
  <div class="Music">
    <div class="Music_header"></div>
    <!-- <n-tabs type="line">
      <n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦"> 七里香 </n-tab-pane>
    </n-tabs> -->
    <div class="PCmusicList">
      <div class="swiper-container-wrapper">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="music_sort_box">
                <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" />
                <div>那些要用耳机才能听的歌</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="music_sort_box">
                <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" />
                <div>那些要用耳机才能听的歌</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="music_sort_box">
                <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" />
                <div>那些要用耳机才能听的歌</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="music_sort_box">
                <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" />
                <div>那些要用耳机才能听的歌</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="music_sort_box">
                <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" />
                <div>那些要用耳机才能听的歌</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="music_sort_box">
                <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" />
                <div>那些要用耳机才能听的歌</div>
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
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.min.css';

onMounted(() => {
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
});
</script>
<style lang="scss" scoped>
.Music {
  width: 100%;
  height: 100%;
  background-color: white;
  .Music_header {
    height: 40px;
  }
  .PCmusicList {
    width: 80%;
    margin: auto;
    .music_sort_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      img {
        width: 240px;
      }
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
