<template>
  <span>
    <Background />
    <main>
      <transition name="el-fade-in-linear">
        <setting-two
          class="setting"
          theme="filled"
          size="28"
          fill="#ffffff60"
          @click="store.setOpenState = true"
        />
      </transition>
      <div class="container" v-show="!store.backgroundShow">
        <section class="main" v-show="!store.setOpenState">
          <MainLeft />
          <MainRight v-show="!store.boxOpenState" />
          <Box v-show="store.boxOpenState" />
        </section>
        <section
          class="more"
          v-show="store.setOpenState"
          @click="store.setOpenState = false"
        >
          <MoreSet />
        </section>
      </div>
      <Icon
        class="menu"
        size="24"
        @click="store.mobileOpenState = !store.mobileOpenState"
      >
        <component :is="store.mobileOpenState ? CloseSmall : HamburgerButton" />
      </Icon>
    </main>
    <Footer v-show="!store.backgroundShow && !store.setOpenState" />
  </span>
</template>
<script setup>
import { mainStore } from '@/store'
import { Icon } from '@vicons/utils'
import { HamburgerButton, CloseSmall, SettingTwo } from '@icon-park/vue-next'
import MainLeft from '@/views/Main/Left.vue'
import MainRight from '@/views/Main/Right.vue'
import Background from '@/components/Background/index.vue'
import Footer from '@/components/Footer/index.vue'
import Box from '@/views/Box/index.vue'
import MoreSet from '@/views/MoreSet/index.vue'

// 新春灯笼
// import '@/utils/lantern.js'

const store = mainStore()
</script>

<style lang="scss" scoped>
main {
  .setting {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }
  .container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    @media (max-width: 1200px) {
      padding: 0 2vw;
    }
    .main {
      width: 100%;
      height: 100%;
      padding: 0 0.75rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .more {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000080;
      backdrop-filter: blur(20px);
      z-index: 2;
      animation: fade;
      -webkit-animation: fade 0.5s;
    }
  }
  .menu {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 84%;
    left: calc(50% - 28px);
    width: 56px;
    height: 34px;
    background: rgb(0 0 0 / 20%);
    backdrop-filter: blur(10px);
    border-radius: 6px;
    transition: all 0.3s;
    animation: fade;
    -webkit-animation: fade 0.5s;
    color: white;
    &:active {
      transform: scale(0.95);
    }
    .i-icon {
      transform: translateY(2px);
    }
    @media (min-width: 720px) {
      display: none;
    }
  }
}

// 加载动画层
.animate {
  transform: scale(1);
  transition: all ease 1.25s;
  opacity: 1;
  filter: blur(0);
  width: 100%;
  height: 100%;
}

.loading {
  .animate {
    transform: scale(1.2);
    transition: all ease 1.25s;
    opacity: 0;
    filter: blur(10px);
  }
}
</style>
