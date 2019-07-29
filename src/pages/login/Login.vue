<template>
 <login-swiper></login-swiper>
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
@import '~@/assets/styles/main.styl';

</style>


