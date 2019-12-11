<template>
  <div>
    <blog-header></blog-header>

    <article-index></article-index>

    <blog-bottom></blog-bottom>
  </div>
</template>

<script>
import BlogHeader from "@/pages/common/Header";
import BlogBottom from "@/pages/common/Bottom"; //底部
import ArticleIndex from "@/pages/article/components/ArticleIndex"; //发布文章
export default {
  name: "BlogArticle",
  components: {
    BlogHeader,
    BlogBottom,
    ArticleIndex
  },
  data() {
    return{
      
    }
  },
  methods: {
  
  }
};
</script>

<style lang="stylus" scoped></style>
