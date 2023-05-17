<template>
  <div class="life-box">
    <div class="white-box">
      <div class="photos-box"></div>
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
          >
            <div class="photos-hover">
              <h2>{{ item.name }}</h2>
              <div class="photos-line"></div>
              <h4 class="photos-text">{{ item.text }}</h4>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
const data = ref([
  { name: '4K风景', text: '4k风景', imgurl: '/images/background15.webp' },
  { name: '4K动漫', text: '4K动漫', imgurl: '/images/background13.webp' },
])
</script>
<style lang="scss" scoped>
.life-box {
  color: #fff;
  height: 100vh;
  color: black;
  .white-box {
    width: 90%;
    max-width: 1100px;
    padding: 50px 40px;
    background-color: #fff;
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06) !important;
    transition: all 0.3s;
    border-radius: 8px;
    margin: auto;
  }
}
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
