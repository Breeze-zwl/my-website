<template>
  <div class="Music">
    <!-- <n-tabs type="line">
      <n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦"> 七里香 </n-tab-pane>
    </n-tabs> -->
    <div class="PCmusicList">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/bundle'

const modules = [Navigation, Pagination, Scrollbar, A11y];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
<style lang="scss" scoped>
.Music {
  width: 100%;
  height: 100%;
  background-color: white;
  // background-image: url('https://website-image-as.oss-cn-beijing.aliyuncs.com/image/d/d1.jpg');
  // background-size: 100% 100%;
  // background-position: center;
  .carousel-img {
    width: 240px;
    height: 240px;
    object-fit: cover;
    flex-shrink: 0 !important;
  }
  .PCmusicList {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
