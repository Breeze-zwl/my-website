<template>
  <div class="life-box">
    <div class="white-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.life-box {
  color: #fff;
  height: 100%;
  min-height: 100vh;
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
</style>
