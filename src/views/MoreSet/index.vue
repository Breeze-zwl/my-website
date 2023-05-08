<template>
  <div
    class="set"
    @mouseenter="closeShow = true"
    @mouseleave="closeShow = false"
    @click.stop
  >
    <transition name="el-fade-in-linear">
      <close-one
        class="close"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="store.setOpenState = false"
      />
    </transition>
    <!-- PC端logo -->
    <div :class="[store.isMobile ? 'mobilelogo' : 'logo']">
      <span class="bg">{{ siteUrl[0] }}</span>
      <span class="sm">.{{ siteUrl[1] }}</span>
    </div>
    <el-row :gutter="40" :class="store.isMobile ? 'wearpbox' : ''">
      <el-col v-if="!store.isMobile" :span="12" class="left">
        <div class="version">
          <div class="num">v&nbsp;{{ config.version }}</div>
          <el-tooltip
            content="Github 源代码仓库"
            placement="right"
            :show-arrow="false"
          >
            <github-one
              class="github"
              theme="outline"
              size="24"
              @click="jumpTo(config.github)"
            />
          </el-tooltip>
        </div>
        <el-card class="update">
          <template #header>
            <div class="card-header" style="color: #fff">
              <span>更新日志</span>
            </div>
          </template>
          <div class="upnote">
            <div v-for="item in upData.new" :key="item" class="uptext">
              <add-one theme="outline" size="22" />
              {{ item }}
            </div>
            <div v-for="item in upData.fix" :key="item" class="uptext">
              <bug theme="outline" size="22" />
              {{ item }}
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="store.isMobile ? 40 : 12" class="right">
        <div class="title">
          <setting-two theme="filled" size="28" fill="#ffffff60" />
          <span class="name">全局设置</span>
        </div>
        <Set />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {
  CloseOne,
  SettingTwo,
  GithubOne,
  AddOne,
  Bug,
} from '@icon-park/vue-next'
import { mainStore } from '@/store'
import Set from '@/components/Set/index.vue'
import config from '@/../package.json'
const store = mainStore()

let closeShow = ref(false)

// 站点链接
let siteUrl = import.meta.env.VITE_SITE_URL.split('.')

// 更新日志
let upData = reactive({
  new: [
    // "采用 Vue 进行重构",
    // "音乐歌单支持快速自定义",
    // "壁纸支持个性化设置",
    // "音乐播放器支持音量控制",
    '这是第一次添加',
  ],
  fix: [
    // "修复天气 API",
    // "时光胶囊显示错误",
    // "移动端动画及细节",
    // "图标更换为 IconPark",
    '我的头发，先救我的头发！！！',
  ],
})
// // 跳转源代码仓库
const jumpTo = (url) => {
  window.open(url)
}
</script>

<style lang="scss" scoped>
.set {
  overflow: auto;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: rgb(255 255 255 / 40%);
  border-radius: 6px;
  padding: 40px;
  .logo {
    transform: translateY(-8%);
    font-family: 'Pacifico-Regular';
    // line-height: 5rem;
    width: 100%;
    // height: 260px;

    .bg {
      font-size: 5rem;
    }

    .sm {
      margin-left: 6px;
      font-size: 2rem;
    }
  }
  .mobilelogo {
    width: 80%;
    font-family: 'Pacifico-Regular';
    font-size: 1.75rem;
    position: fixed;
    top: 6%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s;
    animation: fade;
    -webkit-animation: fade 0.5s;
    &:active {
      transform: scale(0.95);
    }
  }
  .close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 28px;
    height: 28px;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }

  .el-row {
    height: 100%;
    flex-wrap: nowrap;

    .left {
      height: 77%;
      padding-left: 40px !important;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .version {
        display: flex;
        flex-direction: row;
        align-items: center;

        .num {
          font-size: 2rem;
          font-family: 'Pacifico-Regular';
        }

        .github {
          width: 24px;
          height: 24px;
          margin-left: 12px;
          margin-top: 6px;

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      .update {
        margin-top: 30px;
        height: 100%;

        :deep(.el-card__body) {
          height: 100%;

          .upnote {
            padding: 20px;
            height: calc(100% - 56px);
            overflow-y: auto;

            .uptext {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding-bottom: 16px;
              color: #fff;

              &:nth-last-of-type(1) {
                padding: 0;
              }

              .i-icon {
                width: 22px;
                height: 22px;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }

    .right {
      height: 77%;
      padding-right: 40px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: 18px;
        margin-bottom: 16px;
        color: #fff;

        .i-icon {
          width: 28px;
          height: 28px;
          margin-right: 6px;
        }
      }
    }
  }
  .wearpbox {
    height: auto;
    margin-top: 60px;
    display: block;
  }
}
</style>
