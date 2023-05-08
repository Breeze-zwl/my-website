<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <ul class="timeline">
          <li
            class="timeline-event"
            @click="handleWorkRouter('tal')"
            data-aos="fade-up"
          >
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">2018/5~2020/9</p>
              <h3>好未来</h3>
              <h4>高级前端开发工程师</h4>
              <p>业务需求开发，包含小程序、IM系统，后台管理系统</p>
              <p>
                总结：这是我前端启蒙点，让我达到了高级的水平，遇到了一些很好的同事，至今还有我感恩的人
              </p>
            </div>
          </li>
          <li
            class="timeline-event"
            @click="handleWorkRouter('zyb')"
            data-aos="fade-up"
          >
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">2020/10~2021/8</p>
              <h3>作业帮</h3>
              <h4>高级前端开发</h4>
              <p>
                业务开发，技术分享，业务包含：hybrid，小程序，中后台系统，cocos，
              </p>
              <p>
                总结:这是我人生最高光的时刻，从技术到同事关系都非常好（没想到最后却成了我人生的深渊）
              </p>
            </div>
          </li>
          <li
            class="timeline-event"
            @click="handleWorkRouter('gome')"
            data-aos="fade-up"
          >
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">2021/10~2022/6</p>
              <h3>国美</h3>
              <h4>前端开发专家</h4>
              <p>
                业务开发，前端工程化推进，基础服务建设，业务包含中后台系统，
              </p>
              <p>
                总结：很快的一段时间，很多计划的东西没完成，由于当时互联网环境以及工资的原因被迫离开，
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleWorkRouter = (val) => {
  router.push({
    path: `/Zone/work/${val}`,
  })
}
</script>
<style lang="scss" scoped>
.row {
  // background-color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}

.timeline {
  padding-left: 0;
  list-style: none;
  position: relative;
}

.timeline:before {
  background-color: black;
  content: '';
  margin-left: -1px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 2px;
  height: 100%;
}

.timeline-event {
  position: relative;
}

.timeline-event:hover .timeline-event-icon {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #e91043;
}

.timeline-event:hover .timeline-event-thumbnail {
  box-shadow: inset 40em 0 0 0 #e91043;
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  // left: 4em;
  // width: 100%;
  margin-left: 4rem;
  padding-right: 4rem;
  cursor: pointer;
  padding-bottom: 0;
}

.timeline-event-copy h3 {
  font-size: 1.75em;
}

.timeline-event-copy h4 {
  font-size: 1.2em;
  margin-bottom: 1.2em;
}

.timeline-event-copy strong {
  font-weight: 700;
}

.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1.2em;
}

.timeline-event-icon {
  transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;
  transform: rotate(45deg);
  background-color: #e91043;
  outline: 10px solid #f3f3f3;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: black;
  box-shadow: inset 0 0 0 0em #e91043;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}
</style>
