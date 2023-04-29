<template>
  <div class="animate">
    <RoteButton></RoteButton>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { helloInit, checkDays } from '@/utils/getTime.js'
import { mainStore } from '@/store'
import config from '@/../package.json'
import RoteButton from '@/components/RoteButton/RoteButton.vue'
// 新春灯笼
// import '@/utils/lantern.js'
const showAnimate = ref(false)
const store = mainStore()

// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth)
}

onMounted(() => {
  play()
  // 自定义鼠标
  // cursorInit()
  // 欢迎提示
  helloInit()
  // 默哀模式
  checkDays()
  // 加载完成事件
  window.addEventListener('load', () => {
    console.log('加载完成')
    // 去除加载标记
    document.getElementsByTagName('body')[0].className = ''
    // 给加载动画添加结束标记
    let loadingBox = document.getElementById('loading-box')
    loadingBox.classList.add('loaded')
  })

  // 屏蔽右键
  document.oncontextmenu = () => {
    ElMessage({
      message: '为了浏览体验，本站禁用右键',
      grouping: true,
      duration: 2000,
    })
    return false
  }

  // 鼠标中键事件
  window.addEventListener('mousedown', (event) => {
    if (event.button == 1) {
      store.backgroundShow = !store.backgroundShow
      if (store.backgroundShow) {
        ElMessage('已开启壁纸展示状态')
      } else {
        ElMessage('已退出壁纸展示状态')
      }
    }
  })

  // 监听当前页面宽度
  getWidth()
  window.addEventListener('resize', getWidth)

  // 控制台输出
  let styleTitle1 = 'font-size: 20px;font-weight: 600;color: rgb(244,167,89);'
  let styleTitle2 = 'font-size:12px;color: rgb(244,167,89);'
  let title1 = '赵万龙'
  let content = `\n\n版本: ${config.version}\n主页: ${config.home}\nGithub: ${config.github}`
  console.info(`%c${title1}  %c${content}`, styleTitle1, styleTitle2)
})
const play = () => {
  showAnimate.value = true
}
const reset = () => {
  showAnimate.value = false
}

// 监听宽度变化
watch(
  () => store.innerWidth,
  (value) => {
    if (value < 990) {
      store.boxOpenState = false
    }
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('resize', getWidth)
})
</script>

<style lang="scss" scoped>
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
<style>
.el-message {
  color: #fff;
}
</style>
