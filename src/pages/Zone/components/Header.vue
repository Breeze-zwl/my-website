<template>
  <div class="boxvv">
    <div
      :class="['navi', 'open', isShownav ? 'close' : '']"
      @click="handleShow"
    >
      <div class="bt-nav">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
      <div class="navbar animated fadeInRight">
        <div class="innerccv">
          <nav id="site-navigation" class="main-navigation">
            <div id="main-menu">
              <div>
                <ul class="menu">
                  <li>
                    <a href="index.html">首页</a>
                  </li>
                  <li>
                    <a href="update.html">更新</a>
                  </li>
                  <li>
                    <a href="link.html">链接</a>
                  </li>
                  <li>
                    <a href="archives.html">归档</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="">theme</a>
                      </li>
                      <li>
                        <a href="">Happen</a>
                      </li>
                      <li>
                        <a href="">WeWork</a>
                      </li>
                      <li>
                        <a href="">WordPress</a>
                      </li>
                    </ul>
                  </li>
                  <li class="  ">
                    <a href="gustbook.html">留言</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const isShownav = ref(false)
const handleShow = () => {
  isShownav.value = !isShownav.value
}
</script>
<style lang="scss" scoped>
@import './header.css';
</style>
