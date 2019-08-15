<template>
  <div class="index-swiper">
    <div class="index-img">
      <img
        alt
        src="https://s3.amazonaws.com/www-inside-design/uploads/2019/07/casestudyfeature-810x810.jpg"
      />
    </div>
    <div class="index-desc">
      <h1>TBLOG</h1>
      <h3>你有你自己的博客 以及我们</h3>
      <p class="desc-title">社区贡献者</p>
      <div>
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
      </div>

      <div class="index-button">
        <el-row>
          <el-button round class="index-but">更多关于此网站</el-button>
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
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/main.styl';
@import '~@/assets/styles/mixins.styl';

/* 先把a的原有下划线样式给清除 */
a, a:link, a:visited, a:focus {
  text-decoration: none;
  color: #000;
}

.index-swiper {
  background-color: $headerColor;
  border: 0.02rem solid $headerborderColor;
  width: 90%;
  height: auto;
  margin: 0.5rem auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
}

.index-img {
  width: 45%;

  img {
    width: 100%;
    cursor: pointer;
  }
}

.index-desc {
  width: 45%;

  h1 {
    font-size: 0.8rem;
    text-align: left;
  }

  h3 {
    font-size: 0.42rem;
    color: #848282;
    padding: 0.4rem 0.4rem 0 0;
  }

  .desc-title {
    font-size: 14px;
    color: $headerfonthoverColor;
    padding: 0.4rem 0.4rem 0 0;
    cursor: pointer;
  }
}

.index-community {
  display: flex;
  li {
    padding: 0.5rem 0.5rem 0 0;
    position:relative;
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
    ellipsis();
  }

  // 加载下划线淡入淡出 start
  .community-name::after {
    content: '';
    display: block;
    /* 开始时候下划线的宽度为0 */
    width: 0;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: -10px;
    background: #000;
    /* 这里我们设定所有改变都有动画效果，可以自己指定样式才有动画效果 */
    transition: all 0.3s ease-in-out;
  }

  .community-name:hover::after {
    width: 100%;
  }
  // 加载下划线淡入淡出 end

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

  // 加载更多--悬浮改变样式 start
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

.index-button {
  padding: 1rem 0.5rem 0 0;
}

.index-but {
  border-color: $headerfonthoverColor;
}
</style>

