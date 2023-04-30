<template>
  <div>
    <img class="worklogo" src="/Tal/logo.png" />
    <div class="post post-layout-list">
      <div class="postnormal review">
        <div class="post-container review-item">
          <div class="row review-item-wrapper">
            <div class="col-sm-3">
              <div
                class="review-item-img"
                style="background-image: url(/Tal/gp.jpeg)"
              ></div>
            </div>
            <div class="col-sm-9 flex-xs-middle">
              <div class="review-item-title">
                <a href="detail.html" rel="bookmark" class="lookcolo"
                  >故事的开始</a
                >
              </div>
              <div class="review-item-creator"><b>开始日期：</b>2018-5-3</div>
              <span class="review-item-info"
                ><b>个人感悟：</b>儿时竟觉星可摘，抬头不见少年郎</span
              >
            </div>
          </div>
          <div class="review-bg-wrapper">
            <div class="bg-blur"></div>
          </div>
        </div>
        <div class="post-container">
          <div class="entry-content">
            确实讨厌去写所谓的年终总结，在公司已经被动的想领导上交一个总结，自己就懒得去总结，不然，我觉得脑子里应该会编写出八九不离十的内容，所以正经八儿的事情略了，瞎说一下。
            年初的人事调动是个人最不能接受的事情，但不接受也得接受，老板一句“这是命令...
          </div>
          <div class="post-footer">
            <a class="gaz-btn primary" href="">READ MORE</a>
            <span class="total-comments-on-post pull-right"
              ><a href="" class="looknumb">31 Others</a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.worklogo {
  width: 40%;
  height: 100px;
  display: flex;
  margin: auto;
}
.post {
  position: relative;
  max-width: 800px;
  margin: 0 auto 120px;
}
@media screen and (max-width: 760px) {
  .post {
    margin: 0 auto 60px !important;
  }
  .post.review .review-item {
    min-height: 175px !important;
  }
  .row {
    margin-right: 00 !important;
    margin-left: 0 !important;
  }
  .review-item-img {
    display: none;
  }
  .flex-xs-middle {
    position: absolute;
    left: 0 !important;
  }
}
.post-layout-list {
  max-width: 800px;
  margin: auto;
}
.postnormal.review {
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 3px rgba(249, 249, 249, 0.08),
    0 0 0 1px rgba(26, 53, 71, 0.04), 0 1px 1px rgba(26, 53, 71, 0.06);
}

.postnormal.review .review-item {
  position: relative;
  overflow: visible;
  margin-top: 1.5em;
  border-radius: 6px 6px 0 0;
  min-height: 200px;
  background-color: rgb(127, 37, 38);
}

.postnormal.review .post-container {
  margin-top: 0;
  z-index: 2;
}

.postnormal .post-container {
  background: white;
  margin-top: 10px;
  padding: 1.3rem 1.3rem 2rem;
  overflow: hidden;
}
.post.review,
.post-album,
.quote_box,
.status_list_item {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
}
.post.review .review-item {
  min-height: 175px !important;
}
.postnormal.review .review-item .review-item-wrapper {
  position: relative;
  z-index: 1;
  color: white;
}
.row {
  padding: 10px 0;
}
.col-sm-3,
.col-sm-9 {
  position: relative;
  min-height: 1px;
  padding-right: 0;
  padding-left: 0;
}
@media (min-width: 650px) {
  .col-sm-3,
  .col-sm-9 {
    float: left;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-9 {
    widows: 75%;
  }
}
.review-item-img {
  position: absolute;
  width: 130px;
  height: 190px;
  top: -50px;
  left: 25px;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: top center;
}
.flex-xs-middle {
  -ms-flex-item-align: center;
  align-self: center;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 180px;
}
.review-item-title {
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.review-item-creator {
  font-size: 1em;
  font-weight: normal;
  padding: 0.5em 0;
}
.review-item-info {
  display: block;
  font-size: 1em;
  opacity: 0.8;
}
.review-bg-wrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 6px 6px 0 0;
  z-index: 0;
}
.bg-blur {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-size: cover;
  border-radius: 6px;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -o-object-fit: cover;
  object-fit: cover;
  pointer-events: none;
}

.bg-blur:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background: -webkit-linear-gradient(
    top,
    rgba(105, 105, 105, 0.1) 0%,
    #fff 85%
  );
  background: linear-gradient(to bottom, rgba(105, 105, 105, 0.1) 0%, #fff 85%);
}
.entry-content {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.75;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  padding-bottom: 1.3rem;
}
.post-footer .total-comments-on-post {
  padding: 10px 0;
}
.gaz-btn.primary {
  background: #2e60c4;
}

.gaz-btn {
  font-size: 0.8em;
  font-weight: 700;
  padding: 12px 25px;
  text-transform: uppercase;
  color: white !important;
  border-radius: 30px;
  border: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  display: inline-block;
}
.gaz-btn.primary {
  background: #bebbaa;
}
.pull-right {
  float: right;
}
.lookcolo {
  color: inherit;
}
.lookcolo:hover {
  color: #bebbaa;
}
.looknumb {
  color: rgba(2, 0, 0, 0.6);
}
</style>
