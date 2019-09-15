<template>
  <!-- 专题分享 -->
  <div class="index-conter-right">
    <!-- 课程推荐 -->
    <div class="live-swiper index-article">
      <span class="live-span">课程推荐</span>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of liveVideoList" :key="index">
          <a :href="item.urllink" class="live-video">
            <img :src="item.imgUrl" :alt="item.livetitle" />
            <h5 class="live-video-title">{{item.livetitle}}</h5>
            <div class="mte">
              <el-rate v-model="item.liveRate" disabled text-color="#ff9900"></el-rate>
              <span>{{item.livePeople}}</span>
            </div>
            <span class="live-video-price">
              <span class="cur-price">{{item.Price}}</span>
              <del class="origin-price">{{item.Originalprice}}</del>
            </span>
          </a>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>

    <!-- 随笔档案 -->
    <div class="article-list">
      <span class="conter-span">随笔档案</span>
      <ul>
        <li v-for="(item, index) of articledatelist" :key="index">
          <a href="javascript:void(0);">{{item.datetime}}</a>
        </li>
      </ul>
    </div>

    <!-- 推荐博客 -->
    <div class="article-list">
      <span class="conter-span">推荐博客</span>
      <ul>
        <li v-for="(item) of bloglist" :key="item.id">
          <a :href="item.bloglink" target="_blank">{{item.blogtitle}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexSide",
  data() {
    return {
      count: 0,
      busy: true,
      swiperOption: {
        width: 210,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true
        },
        // 自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 滑动速度
        speed: 800
      },
      liveVideoList: [
        {
          urllink: "/ls/1650000018455856",
          imgUrl:
            "https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render",
          livetitle: "TypeScript完全解读(26课时)",
          liveRate: 5,
          livePeople: "(1232 人参与)",
          Price: "￥169.00",
          Originalprice: "￥269.00"
        },
        {
          urllink: "/ls/1650000020068802",
          imgUrl:
            "https://live-static.segmentfault.com/175/037/1750379765-5d53a394d5d3f_render",
          livetitle: "Flutter 社区技术视频",
          liveRate: 5,
          livePeople: "(156 人参与)",
          Price: "￥0.00",
          Originalprice: ""
        },
        {
          urllink: "/ls/1650000016221751",
          imgUrl:
            "https://live-static.segmentfault.com/374/225/374225961-5cb0501214dcf_render",
          livetitle: "Vue技术栈开发实战(26课时)",
          liveRate: 5,
          livePeople: "(802 人参与)",
          Price: "￥249.90",
          Originalprice: "￥399.00"
        },
        {
          urllink: "/ls/1650000016424063",
          imgUrl:
            "https://live-static.segmentfault.com/337/772/3377727865-5ca1d37aa726c_render",
          livetitle: "iView 实战系列教程(21课时)",
          liveRate: 5,
          livePeople: "(727 人参与)",
          Price: "￥249.00",
          Originalprice: "￥299.00"
        }
      ],
      articledatelist: [
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        },
        {
          datetime: "2019年 08月 24日"
        }
      ],
      bloglist: [
        {
          id: "0001",
          blogtitle: "Github",
          bloglink: "https://github.com/"
        },
        {
          id: "0003",
          blogtitle: "码云",
          bloglink: "https://gitee.com/"
        },
        {
          id: "0004",
          blogtitle: "掘金",
          bloglink: "https://juejin.im/timeline/"
        },
        {
          id: "0005",
          blogtitle: "知乎",
          bloglink: "https://www.zhihu.com/"
        },
        {
          id: "0006",
          blogtitle: "开源中国",
          bloglink: "https://www.oschina.net/"
        },
        {
          id: "0007",
          blogtitle: "简书",
          bloglink: "https://www.jianshu.com/"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';

// 右边模块
.index-conter-right {
  width: 40%;

  .live-span {
    line-height: 25px;
    height: 25px;
  }

  .conter-span {
    line-height: 35px;
    font-size: 18px;
    ellipsis();
  }

  .index-article {
    background: #fafafa;
    padding: 0.3rem;
    padding-right: 0;
    border-radius: 0.1rem;
  }

  // 课程推荐
  .live-swiper {
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
        color: $lightgray;
        padding-left: 10px;
        line-height: 19px;
        height: 19px;
      }
    }

    .live-video-price {
      color: $lightgray;
      font-size: 12px;

      span {
        color: #ED1C24;
        font-weight: 700;
        font-size: 14px;
        line-height: 35px;
        height: 35px;
      }

      del {
        margin-left: 10px;
        text-decoration: line-through;
      }
    }

    >>> .el-rate__icon {
      margin-right: 0;
    }
  }

  // 随笔档案
  .article-list {
    margin: 20px;

    ul {
      padding-left: 10px;
    }

    ul li {
      margin: 10px 0;
      ellipsis();

      a {
        font-size: 15px;
        color: #636161;
      }

      a:hover {
        color: $headerfontactiveColor;
        text-decoration: underline;
      }
    }
  }
}
</style>