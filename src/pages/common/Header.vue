<template>
  <header id="topbar">
    <el-row>
      <el-col :span="4" class="topbar-left">
        <a href="#">
          <img src="../../assets/logo.png" />
        </a>
      </el-col>

      <el-col :span="10" class="topbar-center">
        <ul>
          <li>
            <a href="javascript:void(0)">首页</a>
          </li>
          <li>
            <a href="javascript:void(0)">网址数据监控</a>
          </li>
          <li>
            <a href="javascript:void(0)">关于博客</a>
          </li>
        </ul>
      </el-col>

      <el-col :span="10" class="topbar-right"></el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "BlogHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/main.styl';

#topbar {
  padding: 0;
  margin: 0;
  position: relative;
  background-color: $headerColor;
  height: 80px;
  line-height: 80px;
  width: 100%;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 40px 0px;
}

#topbar .topbar-left {
  padding-left: 60px;
  text-align: left;
  display: inline-block;
  transition: all 0.25s ease-out 0s;
  z-index: 10;
}

#topbar .topbar-left img {
}
</style>
