<template>
  <div class="login-page sidebar-collapse">
    <a class="login-in">in</a>
    <div class="wrapper css-1g554ij">
      <div class="swiper-bg">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginSwiper"
};
</script>

<style scoped>
.login-in {
  cursor: pointer;
  display: block;
  left: 1px;
  position: absolute;
  top: 46px;
  z-index: 1;
}
.wrapper {
  /* display: none; */
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 460px;
  min-height: 600px;
  height: 100%;
  overflow: hidden;
  background: rgba(36, 40, 56, 0.65);
}

@media (min-width: 600px) {
  .login-in {
    left: 46px;
  }
  .css-1g554ij {
    position: fixed;
  }
}

@media (min-width: 1076px) {
  .css-1g554ij {
    display: flex;
  }
}
</style>

