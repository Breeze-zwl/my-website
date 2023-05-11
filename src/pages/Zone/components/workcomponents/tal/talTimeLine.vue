<template>
  <div class="taldetailbox">
    <img class="backtal" src="/images/icon/leftarrow.png" @click="backtal" />
    <div class="talkapian">
      <n-image
        src="/Tal/ht.jpeg"
        width="200"
        height="250"
        :img-props="{ align: 'right' }"
      />
      <span class="artil"
        >这一段旅程开始于18年5月3日，我记得我的入职日期是五一假期结束的第一天,在丹棱街大丹凌大厦办理入职手续，当时人很多。因为当时很多辅导老师加上不只是研发入职，很多的屋子，真是找了好久，所以迟到了
        不过其实也没什么重要的事情，只是简单的讲一些上下班时间以及打卡的事情，毕竟好未来不是纯互联网公司，还是要打卡的，还讲了一些其他的具体不清楚了，最后收了很快材料就结束了，因为当时是五一节前后，
        所以路上很多很好看的樱花，我依然记得那天的阳光很好，毕竟是新的开始，实际上后来还是遇到了很多可爱的同事，
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/Tal/gz.jpeg"
        width="200"
        height="280"
        :img-props="{ align: 'left' }"
      />
      <span class="artil"
        >虽然不是人生第一桶金，但是确实有记录的第一笔收入，（这里要感谢百度网盘，自动备份，哈哈）
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/Tal/ty.jpeg"
        width="200"
        height="250"
        :img-props="{ align: 'right' }"
      />
      <span class="artil">
        午休期间偷拍的，这已经是8月8号了，已经是换了一次工区了，说来可笑，我在好未来换了三次工区，科贸大厦，电投大厦，龙冠和谐大厦，此时是我的第二个工区，旁边这个人是我在北京关系好的为数不多
        的人之一，到了现在有事情我还会找她，真的很感恩，也祝她一切都好，
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/Tal/tb1.jpeg"
        width="200"
        height="280"
        :img-props="{ align: 'left' }"
      />
      <span class="artil"
        >第一次团建，也是人生第一次保龄球，当时是一个北京周边的庄园，里面有各种玩的，可以在哪里玩两天，可惜当时我只呆了一下午就走了
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/Tal/zn.jpeg"
        width="360"
        height="250"
        :img-props="{ align: 'right' }"
      />
      <span class="artil">
        组内的第一次出游，虽然还有一集歌没来，但是已经是很弥足珍贵的照片了
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/Tal/nh.jpeg"
        width="300"
        height="280"
        :img-props="{ align: 'left' }"
      />
      <span class="artil"
        >网校年会，那时候还没有疫情，可以线下年会，不过我是中奖绝缘体，连个充电宝都没有，尴尬，哈哈哈
      </span>
      <br />
    </div>
    <div class="talkapian">
      <n-image
        src="/Tal/ozn.jpeg"
        width="360"
        height="450"
        :img-props="{ align: 'right' }"
      />
      <span class="artil"> 一周年了， </span>
      <br />
    </div>
    <div class="tipsgh">
      就先到这了，回忆开始侵袭我的大脑了，写多了也啰嗦，准备把一些照片存在下面的相册里面就好了,我最后的离职日期记不太清了，应该在20年的789月份左右
    </div>
    <div class="zj">
      总结，当时的好未来确实是很好的公司，很多福利待遇不必一线大厂差，而且但是没有卷的文化，呆的很安逸，
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
