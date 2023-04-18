<!-- 全局配置组件 -->
<template>
  <n-config-provider
    abstract
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <NaiveProviderContent />
            <n-layout
              embedded
              :native-scrollbar="false"
              :class="store.headerFixed ? 'fixed' : null"
            >
              <n-back-top :visibility-height="2" @update:show="backTopChange" />
              <Header :class="headerShow ? 'show' : null" />
              <main>
                <router-view></router-view>
              </main>
              <Footer />
            </n-layout>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import {
  zhCN,
  dateZhCN,
  darkTheme,
  useOsTheme,
  useLoadingBar,
  useDialog,
  useMessage,
  useNotification,
} from 'naive-ui'
import { mainStore } from '@/store'
import Header from '@/pages/DailyHot/components/Header.vue'
import Footer from '@/pages/DailyHot/components/Footer.vue'
import Home from '@/pages/DailyHot/components/Home.vue'
import { onMounted } from 'vue'

const store = mainStore()

// 顶栏显隐
const headerShow = ref(false)

// 回顶按钮显隐
const backTopChange = (val) => {
  headerShow.value = val
}

// 明暗切换
let theme = ref(null)
const changeTheme = () => {
  if (store.siteTheme === 'light') {
    theme.value = null
  } else if (store.siteTheme === 'dark') {
    theme.value = darkTheme
  }
}

// 监听明暗变化
watch(
  () => store.siteTheme,
  () => {
    changeTheme()
  }
)

// 监听系统明暗变化
const osThemeRef = useOsTheme()
watch(
  () => osThemeRef.value,
  (value) => {
    value == 'dark' ? store.setSiteTheme('dark') : store.setSiteTheme('light')
  }
)

// 配置主题色
const themeOverrides = {
  common: {
    primaryColor: '#ea444d',
    primaryColorHover: '#F57B74',
    primaryColorSuppl: '#F57B74',
    primaryColorPressed: '#F64B41',
  },
}

// 挂载 naive 组件的方法
const setupNaiveTools = () => {
  window.$loadingBar = useLoadingBar() // 进度条
  window.$notification = useNotification() // 通知
  window.$message = useMessage() // 信息
  window.$dialog = useDialog() // 对话框
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

onMounted(() => {
  changeTheme()
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
    main {
      padding: 118px 5vw 0 5vw;
    }
  }
  :deep(.n-scrollbar-rail) {
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
  }
  main {
    padding: 0 5vw;
    max-width: 1800px;
    margin: 0 auto;
    min-height: calc(100vh - 238px);
  }
}

// 路由跳转动画
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
