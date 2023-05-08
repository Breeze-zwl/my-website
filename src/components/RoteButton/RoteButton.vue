<template>
  <div class="togohome" @click="togohome">
    <span>回到首页</span>
    <img src="/other/homeicon.png" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const togohome = () => {
  router.push({
    path: '/MainPages',
  })
}
</script>
<style lang="scss" scoped>
.togohome {
  color: white;
  position: fixed;
  z-index: 9999;
  top: 6rem;
  left: -5rem;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  padding-left: 1rem;
  border-radius: 0 3rem 3rem 0;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.togohome:hover {
  left: 0;
}
</style>
