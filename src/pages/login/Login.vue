<template>
  <div class="login">
    <div class="logo">
      <a href="/">
        <img src="../../assets/logo.png" alt="Logo" />
      </a>
    </div>
    <!-- form -->
    <div class="main">
      <el-form ref="form" :model="loginForm" class="login-form" autocomplete="on" label-position="left">
        <h4 class="title">
          <div class="normal-title">
            <a class="active" href="/sign_in">登 录</a>
            <b>·</b>
            <a id="js-sign-up-btn" class href="/sign_up">注 册</a>
          </div>
        </h4>

        <el-input 
          :class="username"
          style="padding-bottom:30px;"
          v-model="loginForm.username" 
          placeholder="请输入账户" >
          <template slot="prepend">邮箱</template>
        </el-input>

        <el-input v-model="loginForm.password" placeholder="密码" style="padding-bottom:30px;">
          <template slot="prepend">密码</template>
        </el-input>

        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleLogin"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import LoginSwiper from "./components/LoginSwiper";
export default {
  components: {
    LoginSwiper
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loading: false,
    };
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: "release" });
    },
    username() {
      
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/main.styl';

// 1vh = 1% * 视口高度  1rem = html 50px
.login {
  min-height: 100%;
  width: 100%;
  background-color: $loginbgColor;
  overflow: hidden;
  text-align: center;
  font-size: 0.28rem;

  .logo {
    position: absolute;
    top: 1.12rem;
    margin-left: 1rem;
  }

  .main {
    margin: 1.2rem auto 0;
    padding: 1rem 1rem 0.6rem;
    background-color: #fff;
    border-radius: 0.08rem;
    box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.1);
    vertical-align: middle;
    display: inline-block;
  }
  .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      margin: 0 auto;
      overflow: hidden;
  }
  .main .title {
    margin: 0 auto 1rem;
    padding: 10px;
    font-weight: 400;
    color: #969696;

    .normal-title a {
      font-size: 18px;
      padding: 10px;
      font-family: $logofont;
      color: #ccc;
    }

    .normal-title b {
      padding: 10px;
      font-weight: 700;
    }

    .normal-title .active {
      color: $logoColor;
      font-weight: 700;
      border-bottom: 2px solid #ea6f5a;
    }
  }
}
</style>


