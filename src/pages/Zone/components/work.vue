<template>
  <div class="work-box">
    <div class="work-timeline">
      <timeline></timeline>
    </div>
    <div class="work-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import timeline from '@/pages/Zone/components/timeline.vue'
</script>
<style lang="scss" scoped>
.work-box {
  display: flex;
  min-height: 100vh;
  .work-timeline {
    width: 33%;
  }
  .work-right {
    width: 67%;
    background-color: white;
    color: white;
    padding: 0px 30px;
    position: relative;
  }
}
@media screen and (max-width: 760px) {
  .work-box {
    display: block !important;
  }
  .work-timeline {
    width: 100% !important;
  }
  .work-right {
    width: 100% !important;
  }
}
</style>
