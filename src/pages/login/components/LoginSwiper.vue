<template>
  <div class="login-page sidebar-collapse">
    <a class="login-in">
      <img src="../../../assets/logo-smal.png" />
    </a>
    <div class="wrapper css-1g554ij">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgList" :key="index">
          <img :src="item.imgUrl" class="swiper-img" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- <div class="loginleft-bg login-bg"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginSwiper",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      },
      imgList: [
        {
          imgUrl: require("@/assets/images/molly-nix.jpg")
        },
        {
          imgUrl: require("@/assets/images/andy-law.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/main.styl';

.login-in {
  cursor: pointer;
  display: block;
  left: 1px;
  position: absolute;
  top: 46px;
  z-index: 1;
}

.wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 460px;
  min-height: 600px;
  height: 100%;
  // width: 100%;
  height: 0;
  overflow: hidden;
  background: rgba(36, 40, 56, 0.65);

  .swiper-img {
    width: 100%;
    text-align: center;
  }
}
</style>

