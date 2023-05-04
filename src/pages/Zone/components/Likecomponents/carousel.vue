<template>
  <div class="carsealbox">
    <div id="carousel">
      <div class="swiper swiper-3d">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="/like/1.jpg" />
            <p>my motorcycle</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/2.jpg" />
            <p>my motorcycle</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/3.jpg" />
            <p>my motorcycle</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/4.jpg" />
            <p>my motorcycle</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/6.jpg" />
            <p>about Basketball</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/7.jpg" />
            <p>about Basketball</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/11.jpg" />
            <p>about Basketball</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/9.jpg" />
            <p>about Basketball</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/10.jpg" />
            <p>about Basketball</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/5.jpg" />
            <p>about Basketball</p>
          </div>
          <div class="swiper-slide">
            <img src="/like/12.jpg" />
            <p>about Basketball</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="mumaswiper"></div>
  </div>
</template>
<script setup>
import './swiper-bundle.min.js'
import { onMounted } from 'vue'
const slideW = ~~(document.body.offsetWidth * 0.26) + 10 //一张图300px, 每面四张角度22.5（PI/8），中心角度PI/16
const radius = (slideW * 0.5) / Math.sin(Math.PI / 16) //半径。圆心并不是视点中心，视点在1200px
onMounted(() => {
  const carouselSwiper = new Swiper('#carousel .swiper', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: true,
    loopedSlides: 4,
    grabCursor: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    // freeMode: true,
    on: {
      progress: function (swiper, progress) {
        for (let i = 0; i < this.slides.length; i++) {
          let slide = this.slides[i]
          let slideProgress = this.slides[i].progress
          let translateX =
            (slideProgress + 1.5) *
              (slideW / 3 -
                (Math.cos((slideProgress + 1.5) * 0.125 * Math.PI) *
                  slideW *
                  1.1) /
                  3) +
            'px' //调整图片间距，根据图片宽度改变数值实现自适应
          let rotateY = (slideProgress + 1.5) * 22.5 //图片角度
          let translateZ =
            radius -
            Math.cos((slideProgress + 1.5) * 0.125 * Math.PI) * radius -
            150 +
            'px' //调整图片远近，刚好4个在画框内
          slide.style.transform =
            'translateX(' +
            translateX +
            ') translateZ(' +
            translateZ +
            ') rotateY(' +
            rotateY +
            'deg)'
        }
      },
      setTransition: function (swiper, transition) {
        for (var i = 0; i < this.slides.length; i++) {
          let slide = this.slides[i]
          slide.style.transition = `${transition}ms`
        }
      },
    },
  })
})
</script>
<style lang="scss" scoped>
@import './swiper-bundle.min.css';
@import './carousel.css';
</style>
