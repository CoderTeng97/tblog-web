<template>
  <div class="index-class">
    <!-- 分类推荐 -->
    <div class="index-conter-left">
      <div class="content-title">
        <h5>热门推荐</h5>
      </div>
      <ul>
        <li>
          <a href="javascript:void(0);">
            <p class="article-title-name">vue.config.js 配置</p>
            <div class="article-content">

            </div>
          </a>
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
  border: 0.02rem solid $headerborderColor;
  width: 90%;
  height: auto;
  margin: 0.5rem auto;
  padding: 0.5rem;
  display: flex;
  // justify-content: space-between;
}

.index-class .index-conter-left{
  .content-title {

    margin-top: 15px;
    border-bottom: 1px solid #ddd;
  }
  // 分类推荐
  .article-title-name {
    
  }  
}

</style>
