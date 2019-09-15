<template>
  <div class="index-conter-left">
      <ul
       v-infinite-scroll="loadMore"
        infinite-scroll-disabled="8"
         v-loading="loading"
      >
        <li v-for="(item, index) of articleList" :key="index" class="list-item">
          <a class="wrap-img" href="/p/f5ea40ee3af0" target="_blank" v-if="item.imgUrl != '' ">
            <img :src="item.imgUrl" alt="120" />
          </a>
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
      </ul

        <router-link
          to="/"
          v-if="noMore"
          >
          <div 
            class="load-more"
            v-show="ShowMore">阅读更多</div>
          </router-link>
  </div>
</template>

<script>
export default {
  name: "IndexArticle",
  data() {
    return {
      busy: false, //是否立即执行 false则执行loadMore，true则不执行
      noMore: false,
      loading: false,
      ShowMore: false,
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
        }
      ],
      loadlist: {
          title: "InfiniteScroll流加载", 
          Intr: "如今web开发中，无限加载是必需的一项功能，尤其是在移动端开发中，一个列表往往默认只加载10条，想看更多只能逐渐往下翻页。那么今天就看看如何在Vue-Cli中实现这个功能",
          awesome: '10',
          comment: "0",
          Author: '皮卡丘',
          ReleaseTime: '2019-08-12',
          imgUrl: require("@/assets/images/userimg.png")
      }
    };
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    // 日期格式化
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
    },
    // 流加载，一次性加载一个
    loadMore () {
      setTimeout(() => {
        this.noMore = false;
        this.loading = true;
        if(this.articleList.length > 10) {
            this.noMore = true;
            this.loading = false;
        }else {
          this.articleList.push(this.loadlist)
          this.loading = false;
        }
        if(this.noMore) {
          this.ShowMore = true;
        }else {
          this.ShowMore = false;
        }
      }, 1000)
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

.index-conter-left {
  width: 90%;
  height: auto;
  margin: 0rem auto;
  padding-right 0.5rem;

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
    top: 60%;
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
      color: $blackColor;
    }

    /* 未访问的链接 */
    .article-title-name:visited { /* 已访问的链接 */
      color: $lightgray;
    }

    .article {
      margin: 8px 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: $lightgray;
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
        color: $lightgray;
      }

      .nickname:hover {
        color: $blackColor;
      }
    }
  }

   .load-more {
      width: 90%;
      margin: 30px auto 60px;
      padding: 10px 15px;
      text-align: center;
      font-size: 15px;
      border-radius: 20px;
      color: #fff;
      background-color: #a5a5a5;
      cursor pointer;
  }

}
</style>
