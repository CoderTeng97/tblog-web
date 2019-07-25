<template>
  <div class="entry">
    <login-swiper></login-swiper>
    <!-- <el-row>
      <el-col :span="8" style="margin-top:10px;">
        <el-input id="email" v-model="email" placeholder="请输入帐号">
          <template slot="prepend">邮箱</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" style="margin-top:10px;">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" style="margin-top:10px;">
        <el-button id="login" @click="login"  style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import LoginSwiper from './components/LoginSwiper'
export default {
  components: {
    LoginSwiper
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
    login(){
      this.$router.push({name:'release'});
    }
  }
};
</script>

<style lang="stylus" scoped>
// 1vh = 1% * 视口高度  1rem = html 50px
.entry 
  height 100%
  display block
  height 100vh
  overflow-x: hidden
  position: relative
  width: 100%
  border 1px solid black 


</style>


