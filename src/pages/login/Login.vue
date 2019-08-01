<template>
  <div class="login">
    <login-swiper class="login-swiper"></login-swiper>
    <login-from class="login-from"></login-from>
  </div>
</template>

<script>
import LoginSwiper from "./components/LoginSwiper";
import LoginFrom from "./components/LoginFrom";
export default {
  components: {
    LoginSwiper,
    LoginFrom
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        role: ""
      },
      loading: false,
      options: [
        {
          value: "",
          label: "贡献值"
        },
        {
          value: "",
          label: "开发者"
        }
      ]
    };
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: "release" });
    },
    username() {}
  }
};
</script>

<style lang="stylus" scoped>
.login {
  display flex;
  align-content space-between

  .login-swiper{
    width: 460px;
  }
}  

</style>


