<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="blog-footer">
            <div class="logo">
              <img src="@/assets/logo.png">
            </div>
            <div class="blog-link">
              <p>DCloud 即数字天堂(北京)网络技术有限公司是W3C成员及HTML5中国产业联盟发起单位</p>
              <p>京ICP备12046007号-4</p>
            </div>
            <span class="hidden-xs" style="margin-right: 5px;">Powered By 
              <a href="http://www.wecenter.com/?copyright" target="blank">WeCenter 2.5.8</a>
            </span>
            <span>|</span>
            <span class="hidden-xs" style="margin-left: 5px;">商务合作: 
              <a href="mailto:marketing@dcloud.io" target="blank"> marketing@dcloud.io</a>
            </span>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Bottom'
}
</script>

<style lang="stylus" scoped>
.blog-footer {
  padding-right: 0;
  font-size: 13px;
  color: #666;
  margin-top: 1rem;
  text-align center;
  background-color: #f8f8f8;
  padding 20px 0;
}

.blog-footer .logo {
  margin-bottom 20px;
  
}
.blog-footer .logo img {
    height: 100%;
}
.blog-footer .blog-link {
  p:first-child {
    padding 0;
  }
  p {
    padding 20px;
  }
}
.blog-footer a {
    color: #828288;
}
</style>
