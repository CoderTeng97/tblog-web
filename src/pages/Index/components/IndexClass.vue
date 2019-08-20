<template>
  <div class="index-class">
    <!-- 分类推荐 -->
    <div class="index-conter-left">
      <div class="content-title">
        <el-divider content-position="left">热门推荐</el-divider>
      </div>
      <ul>
        <li>
          <div class="content">
            <a href="javascript:void(0);" class="article-title-name">vue.config.js 配置</a>
            <p
              class="article"
            >性能优化的手段 目标：降低打包后文件大小，提高首屏加载速度 手段： 1.懒加载 运用懒加载则可以将路由对应的页面组件独立分开，路由被访问时候，再...</p>

            <div class="meta">
              <span>
                <i class="iconfont ic-zanicon">&#xe64c;</i> x15
              </span>
              <span>
                <i class="iconfont ic-xiaoxin">&#xe633;</i> 0
              </span>
              <a class="nickname" target="_blank" href="/u/5cdc0352bf01">一只正在成长的程序猿</a>
              <span class="meta-time">· 2019年01月01日</span>
            </div>
          </div>
        </li>

        <li>
          <a class="wrap-img" href="/p/f5ea40ee3af0" target="_blank">
            <img
              src="https://upload-images.jianshu.io/upload_images/10168841-9973bed334ea06ee.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
              alt="120"
            />
          </a>
          <!-- 内容 -->
          <div class="content">
            <a href="javascript:void(0);" class="article-title-name">vue.config.js 配置</a>
            <p
              class="article"
            >性能优化的手段 目标：降低打包后文件大小，提高首屏加载速度 手段： 1.懒加载 运用懒加载则可以将路由对应的页面组件独立分开，路由被访问时候，再...</p>
            <div class="meta">
              <span>
                <i class="iconfont ic-zanicon">&#xe64c;</i> x15
              </span>
              <span>
                <i class="iconfont ic-xiaoxin">&#xe633;</i> 0
              </span>
              <a class="nickname" target="_blank" href="/u/5cdc0352bf01">一只正在成长的程序猿</a>
              <span class="meta-time">· 2019年01月01日</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 热门推荐 -->
    <div class="index-conter-right">
      <ul>
        <li>
          <a href="javascript:void(0);">
            <p class="class-title-name">vue.config.js 配置</p>
            <div></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexClass"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';

.index-class {
  // border: 0.02rem solid $headerborderColor;
  width: 80%;
  height: auto;
  margin: 0rem auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.index-class .index-conter-left {
  width: 55%;

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

  .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
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

// 右边模块
.index-conter-right {
  width: 25%;
}
</style>
