<template>
  <div class="taldetailbox">
    <img class="backtal" src="/images/icon/leftarrow.png" @click="backtal" />
    <div class="talkapian">
      <img src="/gome/bn.jpeg" width="200" height="250" align="right" />
      <span class="artil"
        >在国美的记忆真是少的可怜，甚至连合同都找不到了，主要是因为当时主要的注意力不在工作上面，甚至入职日期以及任何细节都记不清了，这个是当时百年视频里面我手拿的玩偶，
      </span>
      <br />
    </div>
    <div class="talkapian">
      <img src="/gome/cf.jpeg" width="200" height="280" align="left" />
      <span class="artil"
        >去了国美以后就喜欢上了咖啡，特别是luckyin的丝绒拿铁，不知道为什么，基本每天一杯
      </span>
      <br />
    </div>
    <div class="talkapian">
      <img src="/gome/gz.jpeg" width="200" height="250" align="right" />
      <span class="artil">
        同样是感谢百度网盘自动备份，又一次记录了我在国美的某一次工资，哈哈
      </span>
      <br />
    </div>
    <div class="talkapian">
      <img src="/gome/lz.jpeg" width="200" height="280" align="left" />
      <span class="artil"
        >离职后在鹏润大厦前的一次拍照，记得当时是在等滴滴司机，无聊拍的，
      </span>
      <br />
    </div>
    <div class="tipsgh">
      在国美的时间确实很短，但这并非我本意，22年北京互联网什么情况真是不想多说了，加上个人原因，以及工资原因，实在呆不下去了，就走了
    </div>
    <div class="zj">
      总结，这里的内耗非常严重，同事间隔阂很大，办公室内斗那种，leader不是做技术的，管理混乱，业务发展方向不明确，具体不想多说了，
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const backtal = () => {
  router.back(-1)
}
</script>
<style lang="scss" scoped>
.taldetailbox {
  color: black;
  margin-top: 14px;
  .backtal {
    width: 2.2rem;
    height: 2rem;
    cursor: pointer;
  }
  .talkapian {
    display: flow-root;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    border-top: 1px solid #ccc;
  }
  .artil {
    text-indent: 32px;
    color: #2f2e2e;
  }
  .tipsgh {
    padding: 50px 0;
    text-align: center;
  }
  .zj {
    text-align: center;
    padding-bottom: 50px;
    color: #f108a4;
  }
}
</style>
