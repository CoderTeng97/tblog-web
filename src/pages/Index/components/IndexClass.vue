<template>
  <div class="index-class">
    <!-- 分类推荐 -->
    <div class="index-conter-left">
      <ul>
        <li v-for="(item, index) of articleList" :key="index">
          <a class="wrap-img" href="/p/f5ea40ee3af0" target="_blank" v-if="item.imgUrl != '' ">
            <img :src="item.imgUrl" alt="120" />
          </a>
          <!-- 内容 -->
          <div :class="[ item.imgUrl != '' ? 'imgWidth content' : 'NoimgWidth content']">
            <a href="javascript:void(0);" class="article-title-name">{{item.title}}</a>
            <p class="article">{{item.Intr}}</p>
            <div class="meta">
              <span>
                <i class="iconfont ic-zanicon">&#xe64c;</i>
                x{{item.awesome}}
              </span>
              <span>
                <i class="iconfont ic-xiaoxin">&#xe633;</i>
                0{{item.comment}}
              </span>
              <a class="nickname" target="_blank" href="/u/5cdc0352bf01">{{item.Author}}</a>
              <span class="meta-time">· {{item.ReleaseTime}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 专题分享 -->
    <div class="index-conter-right">
      <span>课程推荐</span>
      <div class="live-swiper">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="/ls/1650000018455856" class="live-video">
              <img
                src="https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render"
                alt="课程推荐"
              />
              <h5 class="live-video-title">TypeScript完全解读(26课时)</h5>
              <!-- 评分 -->
              <div class="mte">
                <el-rate v-model="valuerate" disabled text-color="#ff9900"></el-rate>
                <span>(1232人参与)</span>
              </div>
              <span class="live-video-price">
                <span class="cur-price">￥169.00</span>
                <del class="origin-price">￥269.00</del>
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
             <a href="/ls/1650000018455856" class="live-video">
              <img
                src="https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render"
                alt="课程推荐"
              />
              <h5 class="live-video-title">TypeScript完全解读(26课时)</h5>
              <!-- 评分 -->
              <div class="mte">
                <el-rate v-model="valuerate" disabled text-color="#ff9900"></el-rate>
                <span>(1232人参与)</span>
              </div>
              <span class="live-video-price">
                <span class="cur-price">￥169.00</span>
                <del class="origin-price">￥269.00</del>
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
             <a href="/ls/1650000018455856" class="live-video">
              <img
                src="https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render"
                alt="课程推荐"
              />
              <h5 class="live-video-title">TypeScript完全解读(26课时)</h5>
              <!-- 评分 -->
              <div class="mte">
                <el-rate v-model="valuerate" disabled text-color="#ff9900"></el-rate>
                <span>(1232人参与)</span>
              </div>
              <span class="live-video-price">
                <span class="cur-price">￥169.00</span>
                <del class="origin-price">￥269.00</del>
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
             <a href="/ls/1650000018455856" class="live-video">
              <img
                src="https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render"
                alt="课程推荐"
              />
              <h5 class="live-video-title">TypeScript完全解读(26课时)</h5>
              <!-- 评分 -->
              <div class="mte">
                <el-rate v-model="valuerate" disabled text-color="#ff9900"></el-rate>
                <span>(1232人参与)</span>
              </div>
              <span class="live-video-price">
                <span class="cur-price">￥169.00</span>
                <del class="origin-price">￥269.00</del>
              </span>
            </a>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexClass",
  data() {
    return {
      valuerate: 5,
      swiperOption: {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true
        }
      },
      articleList: [
        {
          title: "betterscroll 移动端最好的插件",
          Intr:
            "概述 better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 A...",
          awesome: "12",
          comment: "102",
          Author: "squidbrother",
          ReleaseTime: this.dateFormat(new Date()),
          imgUrl: ""
        },
        {
          title: "betterscroll 移动端最好的插件",
          Intr:
            "概述 better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 A...",
          awesome: "12",
          comment: "102",
          Author: "squidbrother",
          ReleaseTime: this.dateFormat(new Date()),
          imgUrl: require("@/assets/images/index/2509688-5bd44d55ff3fe90d.png")
        },
        {
          title: "betterscroll 移动端最好的插件",
          Intr:
            "概述 better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 A...",
          awesome: "12",
          comment: "102",
          Author: "squidbrother",
          ReleaseTime: this.dateFormat(new Date()),
          imgUrl: ""
        },
        {
          title: "betterscroll 移动端最好的插件",
          Intr:
            "概述 better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 A...",
          awesome: "12",
          comment: "102",
          Author: "squidbrother",
          ReleaseTime: this.dateFormat(new Date()),
          imgUrl: require("@/assets/images/index/2509688-5bd44d55ff3fe90d.png")
        }
      ],
      liveVideoList: [
        {
          
        }
      ]
    };
  },
  computed: {},
  methods: {
    dateFormat: function(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';

.imgWidth {
  width: 70%;
}

.NoimgWidth {
  width: 100%;
}

.index-class {
  width: 80%;
  height: auto;
  margin: 0rem auto;
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
}

.index-class .index-conter-left {
  width: 55%;

  .index-divider {
    color: #999;
  }

  ul li {
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    display: flex;
    position: relative;
  }

  ul li:first-child {
    padding: 0px 2px 20px 0;
  }

  .wrap-img {
    position: absolute;
    top: 55%;
    margin-top: -60px;
    right: 0;
    width: 140px;
    height: 105px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }

  .content {
    .content-title {
      margin-top: 15px;
    }

    // 分类推荐
    .article-title-name {
      ellipsis();
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    .content {
    }

    .article-title-name:hover {
      text-decoration: underline;
      text-shadow: 0 0 5px $backgroundColorHover;
    }

    .article-title-name:link { /* 未访问的链接 */
      color: #000000;
    }

    /* 未访问的链接 */
    .article-title-name:visited { /* 已访问的链接 */
      color: #999999;
    }

    .article {
      margin: 8px 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }

    // 图标
    .meta {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;

      span, a {
        padding-right: 8px;
        ellipsis();
      }

      span {
        color: $headerfontactiveColor;
      }

      .ic-xiaoxin {
        font-size: 18px;
      }

      .ic-like {
        font-size: 14px;
      }

      .nickname, .meta-time {
        color: #999;
      }

      .nickname:hover {
        color: #000;
      }
    }
  }
}

// 右边模块
.index-conter-right {
  width: 41%;

  .live-swiper {
    background: #fafafa;
    padding: 0.3rem;
    padding-right: 0;
    margin: 0.3rem 0 0.3rem 0;
    border-radius: 0.1rem;

    .live-video img {
      width: 4rem;
      height: 2.5rem;
      border-radius: 0.1rem;
    }

    .live-video-title {
      font-size: 0.28rem;
      max-width: 4rem;
      font-weight: 700;
      margin-bottom: 5px;
      line-height: 0.6rem;
      height: 0.6rem;
      ellipsis();
    }

    .mte {
      display: flex;
      justify-content: flex-start;

      span {
        color: #999999;
        padding-left: 10px;
        line-height: 19px;
        height: 19px;
      }
    }

    .live-video-price {
      color: #999;
      font-size: 12px;

      span {
        color: #ED1C24;
        font-weight: 700;
        font-size: 14px;
        line-height: 35px;
        height: 35px;
      }

      del {
        margin-left 10px;
        text-decoration line-through;
      }
    }

    >>> .el-rate__icon {
      margin-right: 0;
    }

    >>> .swiper-slide  {
          width: 210px !important;
    }
  }
}

.index-conter-right span:first-child {
  color: #999999;
}
</style>
