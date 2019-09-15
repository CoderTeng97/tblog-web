<template>
  <div>
    <blog-header></blog-header>
     <blog-bottom></blog-bottom>
  </div>
</template>

<script>
import BlogHeader from "@/pages/common/Header";
import BlogBottom from "@/pages/common/Bottom"; //底部
export default {
  name: 'BlogArticle',
  components: {
    BlogHeader,
    BlogBottom
  }
}
</script>

<style lang="stylus" scoped>

</style>
