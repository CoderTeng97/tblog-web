<template>
  <div class="login-page sidebar-collapse">
    <a class="login-in">
      <img src="../../../assets/logo-smal.png" />
    </a>
    <div class="wrapper css-1g554ij">
      <!-- 轮播 -->
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgList" :key="index">
          <img :src="item.imgUrl" class="swiper-img" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- 文字 -->
      <div class="sign-up__quote">
        <p class="sign-up__quote__excerpt">
          <font
            style="vertical-align: inherit;"
          >“我们正在为全球用户群设计...... [借助InVision]，我们不仅可以从我们在旧金山看到的，而且可以从世界各地获得反馈。”</font>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrySwiper",
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
          imgUrl: require("@/assets/images/login-bg1.png")
        },
        {
          imgUrl: require("@/assets/images/login-bg2.png")
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

.login-in {
  cursor: pointer;
  display: block;
  left: 1px;
  position: absolute;
  top: 46px;
  z-index: 2;
}

.wrapper >>> .swiper-pagination-bullet {
  background-color #dcdfe6;
  margin 0 12px;
  z-index 99;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #ffffff;
}

.wrapper >>> .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 40px;
  width: 94%;
  text-align: right;
}

.wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 460px;
  min-height: 625px;
  height: 100%;
  height: 0;
  overflow: hidden;
  background: rgba(36, 40, 56, 0.65);

  .swiper-img {
    width: 100%;
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .sign-up__quote.selected {
    display: block;
  }

  .sign-up__quote {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 40px;
    z-index: 3;
  }

  .sign-up__quote__excerpt {
    position: relative;
    margin-bottom: 120px;
    font-size: 16px;
    font-style: italic;
    color: #FFF;
    line-height: 26px;
    opacity: 0.8;
    z-index: 3;
  }
}
</style>

