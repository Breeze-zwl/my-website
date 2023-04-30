<template>
  <n-loading-bar-provider>
    <NaiveProviderContent />
    <n-layout embedded :native-scrollbar="false" class="fixed">
      <n-back-top :visibility-height="2" @update:show="backTopChange" />
      <div class="zone-box">
        <Header></Header>
        <router-view></router-view>
      </div>
    </n-layout>
  </n-loading-bar-provider>
</template>

<script setup>
import { useLoadingBar } from 'naive-ui'
import Header from '@/pages/Zone/components/Header.vue'

// 顶栏显隐
const headerShow = ref(false)

// 回顶按钮显隐
const backTopChange = (val) => {
  headerShow.value = val
}

// 挂载 naive 组件的方法
const setupNaiveTools = () => {
  window.$loadingBar = useLoadingBar() // 进度条
}
// 初始化热点页面
const initpage = () => {
  $loadingBar.start()
}
const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools()
    initpage()
  },
  render() {
    return h('div', {
      class: {
        tools: true,
      },
    })
  },
})

setTimeout(() => {
  $loadingBar.finish()
}, 3000)
</script>
<style lang="scss" scoped>
.n-layout {
  height: 100%;
  &.fixed {
    .header {
      width: 100%;
      margin: 0;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      box-sizing: border-box;
      &.show {
        height: 70px;
        border-bottom: 2px solid var(--n-border-color);
        background-color: var(--n-color);
        :deep(section) {
          .logo {
            img {
              width: 40px;
              height: 40px;
            }
            .name {
              span {
                &:nth-of-type(1) {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
  :deep(.n-scrollbar-rail) {
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
  }

  .zone-box {
    background-color: #fff;
    width: 100%;
    height: 100%;
    background: url('/images/background11.webp') no-repeat;
    background-position: left top;
    background-size: 100% 100%;
    // padding: 20rem 0;
  }
  .zone-linshi {
    color: #fff;
    font-size: 40px;
  }
}
</style>
