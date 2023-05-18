<template>
  <el-row :gutter="20">
    <el-col
      :span="12"
      :xs="24"
      :md="12"
      v-for="(item, index) in data"
      :key="index"
    >
      <div
        class="bg-img"
        :style="{ 'background-image': `url(${item.imgurl}) ` }"
        @click="toPhotos(item.value)"
      >
        <div class="photos-hover">
          <h2>{{ item.name }}</h2>
          <div class="photos-line"></div>
          <h4 class="photos-text">{{ item.text }}</h4>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const data = ref([
  {
    name: '4K风景',
    text: '4k风景',
    imgurl: '/images/background15.webp',
    value: '1',
  },
  {
    name: '4K动漫',
    text: '4K动漫',
    imgurl: '/images/background13.webp',
    value: '2',
  },
])
const toPhotos = (e) => {
  router.push({
    path: `/Zone/About/photos`,
    query: {
      type: e,
    },
  })
}
</script>
<style lang="scss" scoped>
.bg-img {
  position: relative;
  height: 250px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  cursor: pointer;
  background-size: 100% 100%;
  transition: background-size 0.5s;
  &:hover {
    background-size: 110% 110%;
  }
  .photos-hover {
    padding: 40px 30px;
    color: #fff;
    width: 100%;
    height: 100%;
    .photos-line {
      height: 2px;
      width: 0;
      background-color: #fff;
      margin-top: 15px;
      transition: all 0.3s;
      margin-bottom: 8px;
    }
    .photos-text {
      position: absolute;
      left: 90%;
      transition: all 0.4s;
      opacity: 0;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      .photos-line {
        width: 100%;
      }
      .photos-text {
        opacity: 1;
        left: 30px;
      }
    }
  }
}
.el-col {
  margin-bottom: 20px;
}
</style>
