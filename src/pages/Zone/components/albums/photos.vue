<template>
  <div>
    <div class="photo-wrap">
      <img
        v-for="(item, index) of imageData"
        class="photo"
        :key="index"
        :src="item"
      />
    </div>
    <infinite-loading @infinite="loadData">
      <template #complete>
        <span></span>
      </template>
    </infinite-loading>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const filename = +router.currentRoute.value.query.type == 1 ? 'f' : 'd'
const baseurl = `https://website-image-as.oss-cn-beijing.aliyuncs.com/image/`
const imageData = ref([])
const imagelength = +router.currentRoute.value.query.type == 1 ? 9 : 84
const randomlist = []
//模拟请求图片
imageData.value = new Array(10).fill(baseurl).map((x, index) => {
  return x + filename + '/' + filename + (index + 1) + '.jpg'
})
const loadData = (state) => {
  let pages = 10
  if (imageData.value.length >= imagelength) {
    state.complete()
    return
  }
  if (imageData.value.length + 10 > imagelength) {
    pages = imagelength - imageData.value.length
  }
  const imageKey = new Array(pages).fill(baseurl).map((x, index) => {
    return (
      x +
      filename +
      '/' +
      filename +
      (index + imageData.value.length + 1) +
      '.jpg'
    )
  })
  imageData.value.push(...imageKey)
}
</script>
<style scoped>
.photo-wrap {
  display: flex;
  flex-wrap: wrap;
}
.photo {
  margin: 3px;
  cursor: pointer;
  flex-grow: 1;
  object-fit: cover;
  height: 200px;
}
.photo-wrap::after {
  content: '';
  display: block;
  flex-grow: 9999;
}
@media (max-width: 759px) {
  .photo {
    width: 100%;
  }
}
</style>
