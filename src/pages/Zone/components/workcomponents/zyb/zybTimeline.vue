<template>
  <div class="taldetailbox">
    <img class="backtal" src="/images/icon/leftarrow.png" @click="backtal" />
    <div class="talkapian">
      <n-image
        src="/zyb/ht.jpeg"
        width="200"
        height="250"
        :img-props="{ align: 'right' }"
      />
      <span class="artil"
        >这一段旅程开始于20年10月左右，记得那天下着下雪，落地就化成水那种，在上地开拓大厦办完入职手续后，去了上地创新大厦入职，记得当时的领导把我忘记了，我在前台等了大概半个多小时，
        后来入职以后发现，可能是太忙了，现在回想起来，觉得后面的日子就想那天的天气一样，冰冷潮湿。。。
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/zyb/szn.jpeg"
        width="200"
        height="280"
        :img-props="{ align: 'left' }"
      />
      <span class="artil"
        >这里已经到了21年的1月份，因为入职的时候就接了一个很大的项目，即使周六日都加班到晚上12点，所以根本没有时间去记录一些东西，我直接当时我上班以后，第一眼看手机时下午3点多，中午饭都没吃，
        （当时K12都在抢钱，确实忙的不可开交）
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/zyb/sc.jpeg"
        width="200"
        height="250"
        :img-props="{ align: 'right' }"
      />
      <span class="artil">
        当时作业帮时管饭的，自己又因为之前吃的太猛了，体重直线到达190斤，公司还有素餐，所及就决定减肥一段时间吃素，（其实本人净身高188cm），
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/zyb/gzt.jpeg"
        width="400"
        height="280"
        :img-props="{ align: 'left' }"
      />
      <span class="artil"
        >依然感谢百度网盘自动备份，保存了我某个月的工资条，
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/zyb/wmp.jpeg"
        width="220"
        height="250"
        :img-props="{ align: 'right' }"
      />
      <span class="artil">
        公司万米跑，其实在好未来的时候也有这项活动，我不明白为什么，难道当时的K12都有这个活动吗？但是可以划水一天，现在想想还是很开心，
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/zyb/gw.jpeg"
        width="300"
        height="280"
        :img-props="{ align: 'left' }"
      />
      <span class="artil"
        >杂乱无章的工位，当时确实清闲过一段时间，但是当时没有现在的觉悟，没有好好学习，就顾着玩了，并且做了人生中重大的错误决定，🏠
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/zyb/lz.jpeg"
        width="240"
        height="350"
        :img-props="{ align: 'right' }"
      />
      <span class="artil">
        被迫离职，原因，当年政府整顿K2，一大批K12被迫离职的人，我算其中一个，也是在这个时候开始感觉到互联网真的很泡沫，
      </span>
      <br />
    </div>
    <div class="tipsgh">
      翻来翻去发现，在作业帮的记录很少，可能是年龄大了，不爱弄一些花里胡哨的，更愿意做一些实质性的东西吧，
    </div>
    <div class="zj">
      总结，福利待遇小气了一点，但这里同事都很好，在这里学到了很多东西，特别是技术增长了很多，但是在我个人生活上做了一个致命的错误，导致我后面两年一直无法缓过来
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
.n-image {
  display: block;
}
</style>
