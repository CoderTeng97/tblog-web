<template>
  <div class="index-swiper">
    <div class="index-img">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of SwiperList" :key="index">
          <img :src="item.imgUrl" class="swiper-img" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
    <div class="index-desc">
      <h1>TBLOG</h1>
      <h3>你有你自己的博客 以及我们</h3>
      <p class="desc-title">社区贡献者</p>

      <ul class="index-community">
        <li v-for="(item, index) of AvatarImgUrl.slice(0,4)" :key="index">
          <a href="#">
            <img :src="item.imgUrl" :alt="item.title" class="community-img" />
            <p class="community-name">{{item.title}}</p>
          </a>
        </li>
        <li>
          <a href="#" class>
            <div class="communtiy-div">
              <p class="iconfont">&#xe637;</p>
            </div>
            <p class="community-name">更多贡献者</p>
          </a>
        </li>
      </ul>

      <div class="index-button">
        <el-row>
          <el-button round class="index-more-but">更多关于此网站</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexSwiper",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      AvatarImgUrl: [
        {
          link: "javascirpt:void(0);",
          imgUrl: require("@/assets/images/userimg.png"),
          title: "狐狸"
        },
        {
          link: "javascirpt:void(0);",
          imgUrl: require("@/assets/images/userimg.png"),
          title: "小王子"
        },
        {
          link: "javascirpt:void(0);",
          imgUrl: require("@/assets/images/userimg.png"),
          title: "锐"
        },
        {
          link: "javascirpt:void(0);",
          imgUrl: require("@/assets/images/userimg.png"),
          title: "小王子2"
        },
        {
          link: "javascirpt:void(0);",
          imgUrl: require("@/assets/images/userimg.png"),
          title: "锐2"
        },
        {
          link: "javascirpt:void(0);",
          imgUrl: require("@/assets/images/userimg.png"),
          title: "锐3"
        }
      ],
      SwiperList: [
        {
          imgUrl:
            "//upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        },
        {
          imgUrl:
            "//upload.jianshu.io/admin_banners/web_images/4706/7fc6a088c85ad29ab9754a8f5a7569c83a9db0a4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        },
        {
          imgUrl:
            "//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';

.index-swiper >>> .swiper-pagination-bullet-active {
  background-color: #ffffff;
}

.index-swiper {
  border: 0.02rem solid $headerborderColor;
  width: 90%;
  height: 7rem;
  margin: 0.5rem auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
}

.index-img {
  width: 45%;
  overflow: hidden;

  .swiper-img {
    width: 100%;
  }
}

.index-desc {
  width: 45%;
  cursor: pointer;

  h1 {
    font-size: 0.8rem;
    text-align: left;
    ellipsis();
  }

  h3 {
    font-size: 0.42rem;
    color: #848282;
    padding: 0.4rem 0.4rem 0 0;
    ellipsis();
  }

  .desc-title {
    font-size: 14px;
    color: $headerfontactiveColor;
    padding: 0.4rem 0.4rem 0 0;
    cursor: pointer;
    ellipsis();
  }
}

.index-community {
  display: flex;

  li {
    padding: 0.5rem 0.5rem 0 0;
    position: relative;
  }

  a {
    position: relative;
    max-width: 80px;
  }

  .community-img {
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    border: 0.02rem solid $headerborderColor;
  }

  .community-img:hover {
    opacity: 0.6;
    box-shadow: 0 0 15px $headerborderColor;
  }

  .community-name {
    color: $headerfontColor;
    padding: 0.25rem 0 0 0;
    cursor: pointer;
    text-align: center;
    position: relative;
    ellipsis();
  }

  .communtiy-div {
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    border: 0.02rem solid $headerborderColor;
    box-shadow: -5px 5px 15px -5px #f1f1f1;
    overflow: hidden;
    position: relative;
    transition: 0.3s linear;

    p {
      line-height: 1.2rem;
      transition: 0.3s linear;
      position: absolute;
      font-size: 0.6rem;
      left: 0.27rem;
      color: #f76d8f;
    }
  }
}

// 按钮
.index-button {
  padding: 1rem 0.5rem 0 0;
}

.index-more-but {
  color: $headerfontactiveColor;
  border: 0.02rem solid $headerfontactiveColor;
  font-weight: 10rem;
  font-family: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
}

.index-more-but:hover {
    border-color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
    color: #ec6149;
  }

/* 使用伪类给a下面添加下划线 */
.index-desc {
  /* css3为了区别伪类选择器把::改为:,使用:也会自动转为:: */
  .community-name::after {
    content: '';
    display: block;
    /* 开始时候下划线的宽度为0 */
    width: 0;
    height: 3px;
    left: 0;
    bottom: -10px;
    /* 这里我们设定所有改变都有动画效果，可以自己指定样式才有动画效果 */
    transition: all 0.3s ease-in-out;
  }

  .community-name::after {
    background: $logoColor;
  }

  .community-name:hover::after {
    width: 100%;
  }

  .communtiy-div:hover {
    transform: scale(1.1);
  }

  .communtiy-div:hover p {
    transform: scale(1.2);
    color: #fff;
  }

  .communtiy-div:before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
  }

  .communtiy-div:nth-child(1)::before {
    background: #f76d8f;
  }

  .communtiy-div:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
  }

  @keyframes aaa {
    0% {
      left: -110%;
      top: 90%;
    }

    50% {
      left: 10%;
      top: -30%;
    }

    100% {
      left: -10%;
      top: -10%;
    }
  }
}
</style>

