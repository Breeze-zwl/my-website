<template>
  <div :class="['life-box', store.isMobile ? 'mobildH' : '']">
    <div class="life-tips">
      2023-3-3，发生了一些事情，网站大改版，删除了很多内容，留下了一部分，展现形式也有所改变，目前先这个样子，
    </div>
    <div v-if="!store.isMobile">
      <carousel></carousel>
    </div>
    <div v-if="store.isMobile">
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="/like/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/6.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/7.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/11.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/9.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/10.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/like/12.jpg" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="introduce">
      本人：1994年，188cm，85kg，平时除了撸代码，最喜欢的就是篮球，其次身为一个男生当然是机车，然后就是打打游戏，健谈爱笑，少年感十足，当然这不是相亲，如果你跟我有共同的爱好，
      首页有我的联系方式，嘻嘻
    </div>
  </div>
</template>
<script setup>
import { EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import carousel from '@/pages/Zone/components/Likecomponents/carousel.vue'
import { mainStore } from '@/store'
import 'swiper/css/bundle'

const store = mainStore()
const modules = ref([EffectCards])
</script>
<style lang="scss" scoped>
.life-box {
  color: black;
  height: calc(100vh - 180px);
  height: 100vh;
  color: white;
  text-align: center;
  // overflow: hidden;
  position: relative;
}
.mobildH {
  height: 100vh;
}
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
.introduce {
  margin-top: 40px;
  padding: 0 40px;
  font-size: 16px;
}
.life-tips {
  padding: 0 40px;
  margin-bottom: 20px;
}
</style>
