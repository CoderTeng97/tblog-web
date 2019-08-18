<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
  }
}
</script>

<style>

#app {
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;

} 
/* 先把a的原有下划线样式给清除 */
a, a:link, a:visited, a:focus {
  text-decoration: none;
  color: #000;
}
</style>
