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
                    <a @click.stop="handlezonesort('work/tal')">工作经历</a>
                  </li>
                  <!-- <li>
                    <a @click.stop="handlezonesort('life')">生活经历</a>
                  </li> -->
                  <li>
                    <a @click.stop="handlezonesort('Like')">兴趣爱好</a>
                  </li>
                  <!-- <li>
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
                  </li> -->
                  <li class="  ">
                    <a @click.stop="handlezonesort('She')">she</a>
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
import { mainStore } from '@/store'
import { useRouter } from 'vue-router'
const store = mainStore()
const router = useRouter()
const isShownav = ref(true)

watch(
  () => store.isMobile,
  (value) => {
    isShownav.value = !value
  },
  { immediate: true, deep: true }
)
const handleShow = () => {
  isShownav.value = !isShownav.value
}
const handlezonesort = (val) => {
  if (store.isMobile) {
    isShownav.value = false
  }
  router.push({
    path: `/Zone/${val}`,
  })
}
</script>
<style lang="scss" scoped>
.boxvv {
  height: 180px;
}
.navi {
  position: absolute;
  right: 0;
  z-index: 999;
}

.navbar {
  float: right;
  margin-top: 40px;
  padding-right: 90px;
}

.open .navbar {
  display: none;
}

.close .navbar {
  display: block;
}

.bt-nav {
  display: block;
  position: absolute;
  z-index: 999;
  top: 2em;
  right: 3em;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.open .bt-nav .line1 {
  top: 17px;
}

.open .bt-nav .line3 {
  top: 27px;
}

.close .bt-nav .line {
  top: 17px;
}

.close .bt-nav .line1 {
  -webkit-transform: rotateZ(45deg);
}

.close .bt-nav .line2 {
  opacity: 0;
}

.close .bt-nav .line3 {
  -webkit-transform: rotateZ(-45deg);
}

.bt-nav .line {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 30px;
  margin-left: -15px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
  -webkit-transition: all 0.3s ease;
}

.main-navigation a::after,
.main-navigation a::before {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}

.main-navigation a::before {
  margin-right: 5px;
  content: '[';
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
}

.main-navigation a::after {
  margin-left: 5px;
  content: ']';
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
}

.main-navigation a:focus::after,
.main-navigation a:focus::before,
.main-navigation a:hover::after,
.main-navigation a:hover::before {
  opacity: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}

.main-navigation ul ul:before {
  z-index: 0;
  content: '';
  position: absolute;
  top: -8px;
  right: 28px;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #fff transparent;
  -webkit-transform: rotate(360deg);
}

.main-navigation li {
  color: #fff;
  position: relative;
  cursor: pointer;
}

.main-navigation a {
  display: block;
  text-decoration: none;
}

.main-navigation ul ul {
  position: absolute;
  top: 40px;
  z-index: 999;
  display: none;
  background-color: #fff;
  border-radius: 3px;
}

.main-navigation ul ul ul {
  bottom: 0;
}

.main-navigation ul ul li {
  float: none;
  display: block;
  width: 100%;
}

.main-navigation ul ul a.focus,
.main-navigation ul ul a:hover {
  color: #666;
}

.main-navigation ul li.focus > ul,
.main-navigation ul li:hover > ul {
  right: 0;
  display: block;
}

.main-navigation ul ul li.focus > ul,
.main-navigation ul ul li:hover > ul {
  right: 100%;
  display: block;
}

.main-navigation.toggled ul,
.menu-toggle {
  display: block;
}

.header-menu-button {
  display: none;
}

.menu-dropdown {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9;
  display: none;
  margin: 0;
  padding: 10px 14px;
  height: 35px;
  text-align: center;
  font-size: 14px;
  line-height: 15px;
  cursor: pointer;
}

.open-page-item > ul.children,
.open-page-item > ul.sub-menu {
  display: block !important;
}

.main-navigation ul {
  display: block;
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.main-navigation li {
  float: left;
  margin: 0;
}

.main-navigation li a {
  color: inherit;
  font-weight: bold;
}

.main-navigation li a span {
  display: none;
}

.main-navigation ul ul a {
  color: rgba(2, 0, 0, 0.6);
  float: none;
  padding: 15px 25px 15px 20px;
  width: 100%;
  min-width: 190px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
  text-align: left;
  white-space: nowrap;
}

.main-navigation ul ul li:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.main-navigation {
  padding: 0;
  -webkit-transition: right 0.4s ease 0s;
  -moz-transition: right 0.4s ease 0s;
  -ms-transition: right 0.4s ease 0s;
  -o-transition: right 0.4s ease 0s;
  transition: right 0.4s ease 0s;
}

#main-menu > div,
#primary-menu {
  float: left;
}

.main-navigation li a {
  padding: 0 10px 40px;
}

.Yarn_Background,
.p-header .p-image {
  position: fixed;
  width: 100%;
  height: 100%;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: top center;
  z-index: -999;
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@media screen and (max-width: 760px) {
  .navi {
    position: fixed;
    height: 100%;
    text-align: center;
  }
  .navbar {
    float: right;
    margin-top: 0;
    padding-right: 0;
  }
  .bt-nav {
    right: 1em;
    top: 1em;
  }
  .bt-nav.scrolled {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  }
  .bt-nav.scrolled .line {
    width: 5px;
    height: 5px;
    margin-left: -3px;
  }
  .hebin {
    top: 1.5em;
    left: 1em;
  }
  .close .navbar {
    display: block;
    height: 100%;
    background: #333;
  }
  .main-navigation ul ul:before {
    display: none;
  }
  .innerccv {
    overflow: auto;
    max-height: 100%;
    padding: 5em 0 0 0;
  }
  .menu-dropdown {
    display: block;
  }
  #main-menu > div {
    display: block;
    float: none;
  }
  .main-navigation #main-menu {
    color: #fff;
    width: 280px;
    -ms-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 999;
    height: 100%;
    overflow: auto;
    -webkit-transition: right 0.4s ease 0s;
    -moz-transition: right 0.4s ease 0s;
    -ms-transition: right 0.4s ease 0s;
    -o-transition: right 0.4s ease 0s;
    transition: right 0.4s ease 0s;
  }
  .main-navigation li {
    display: block;
    float: none;
  }
  .main-navigation li a {
    display: block;
    float: none;
    padding: 20px;
    color: #c5c5c5 !important;
    text-align: left;
  }
  .main-navigation ul ul {
    box-shadow: none;
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
    float: none !important;
    background-color: rgba(255, 255, 255, 0.14) !important;
    padding: 0;
    margin: 0;
    display: none !important;
  }
}
</style>
