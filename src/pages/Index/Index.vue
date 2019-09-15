<template>
  <div>
    <blog-header></blog-header>
    <div class="index">
      <index-swiper></index-swiper>
      <div class="index-content">
        <index-article></index-article>
        <index-side></index-side>
      </div>
    </div>
    <blog-bottom></blog-bottom>
  </div>
</template>

<script>
import BlogHeader from "@/pages/common/Header";
import IndexSwiper from "@/pages/Index/components/IndexSwiper";
import IndexArticle from "@/pages/Index/components/IndexArticle"; //文章类
import IndexSide from "@/pages/Index/components/IndexSide"; //侧边栏
import BlogBottom from "@/pages/common/Bottom"; //底部
export default {
  components: {
    BlogHeader,
    IndexSwiper,
    IndexArticle,
    IndexSide,
    BlogBottom
  }
};
</script>

<style lang="stylus" scoped>
.index {
  width: 80%;
  margin: 0 auto;
}

.index-content {
  display: flex;
  justify-content: space-between;
}
</style>

