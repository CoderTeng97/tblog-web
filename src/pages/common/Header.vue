<template>
  <header id="topbar">
    <el-row>
      <el-col :span="4" class="topbar-left">
        <a href="#">
          <img src="../../assets/logo.png" />
        </a>
      </el-col>

      <el-col :span="11" class="topbar-center">
        <ul>
          <li>
            <a href="javascript:void(0)" class="active">首页</a>
          </li>
          <li>
            <a href="javascript:void(0)">关注</a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <el-badge is-dot class="item">消息</el-badge>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <span class="iconfont  header-center-icon">&#xe60d;</span>评论
                  </el-dropdown-item>
                  <el-dropdown-item>
                     <span class="iconfont header-center-icon">&#xe65b;</span>喜欢与赞
                  </el-dropdown-item>
                  <el-dropdown-item>
                     <span class="iconfont header-center-icon">&#xe685;</span>关注
                  </el-dropdown-item>
                  <el-dropdown-item> 
                    <span class="iconfont header-center-icon">&#xe637;</span>其他提醒
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </a>
          </li>
          <li>
            <!-- 搜索 -->
            <el-autocomplete
              v-model="params.search"
              class="inline-input"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              :trigger-on-focus="false"
              @select="handleSelect"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-autocomplete>
          </li>
        </ul>
      </el-col>

      <el-col :span="9" class="topbar-right">
        <ul>
          <li>
            <a href="javascript:void(0);">
              <el-button type="danger" round class="article">
                <span class="iconfont">&#xe652;</span>
                写文章
              </el-button>
            </a>
          </li>
          <!-- 已登录状态 -->
          <li class="right" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
            <a href="javascript:void(0)" class="demo-type">
              <el-dropdown class="avatar_drop">
                <span class="el-dropdown-link">
                  <el-avatar :src="user.avatar"></el-avatar>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="avatar_dorpul">
                  <el-dropdown-item>
                    <span class="iconfont iconheader">&#xe655;</span>我的主页
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <span class="iconfont iconheader">&#xe667;</span>我的收藏
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <span class="iconfont iconheader">&#xe63c;</span>我的喜欢
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <span class="iconfont iconheader">&#xe62b;</span>设置
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <span class="iconfont iconheader">&#xe613;</span>退出
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </a>
          </li>
          <!-- <li>
            <a href="javascript:void(0);">
              <el-button round class="regiter">注册</el-button>
            </a>
          </li>
          <li>
            <a href="javasciprt:void(0);" class="login">登录</a>
          </li>-->

          <li>
            <a href="javascript:void(0);">
              <button class="icon">
                <span class="iconfont ic-qq">&#xe7a0;</span>
              </button>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <button class="icon">
                <span class="iconfont ic-weixin">&#xe65d;</span>
              </button>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <button class="icon">
                <span class="iconfont ic-weibo">&#xe629;</span>
              </button>
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "BlogHeader",
  data() {
    return {
      flag: false,
      params: {
        search: ""
      },
      user: {
        avatar:
          "//upload.jianshu.io/users/upload_avatars/13918408/128ce514-9f4a-4d49-b862-776084905011?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
      },
      restaurants: [],
      timeout: null
    };
  },
  methods: {
    getUserInfo() {
      //用户信息中心
    },
    exit() {
      //退出
    },
    loadAll() {
      return [{ value: "hexo" }, { value: "vue" }, { value: "React" }];
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

>>> .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: $backgroundColorHover;
  color: #000000;
}

.el-dropdown-menu__item {
  .iconheader, .header-center-icon {
    color: $btnColor;
    padding-right: 10px;
  }
}

#topbar {
  padding: 0;
  margin: 0;
  position: relative;
  border: 1px solid $headerborderColor;
  height: 80px;
  line-height: 80px;
  width: 100%;
  color: #000;
  overflow: hidden;

  .active {
    color: #ea6f5a !important;
  }
}

#topbar .topbar-left {
  padding-left: 60px;
  text-align: left;
  display: inline-block;
  transition: all 0.25s ease-out 0s;
  z-index: 10;
}

#topbar .topbar-center ul li {
  display: inline-block;
  padding: 15px 30px;
  text-decoration: none;
  transition: color 0.15s ease-out 0s;
  font: 500 17px / 30px arial, sans-serif;
  cursor: pointer;
}

#topbar .topbar-center ul li a {
  color: $headerfontColor;

  .item {
    font-size: 17px;
  }
}

#topbar .topbar-center ul li:not(:last-child):hover {
  background-color: $backgroundColorHover;
}

#topbar .topbar-center >>> .el-input__inner:focus {
  border-color: #DCDFE6;
}

#topbar .topbar-right ul li {
  display: inline-block;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
  float: right;
}

#topbar .topbar-right .icon-search {
  position: relative;
}

#topbar .topbar-right .el-icon-search {
  position: absolute;
  margin-top: 35px;
  margin-left: -25px;
  color: #000;
  cursor: pointer;
}

#topbar .topbar-right li .icon {
  height: 40px;
  width: 40px;
  border: 1px solid #f5f5f5;
  border-radius: 50%;
  background: #ffffff;
}

#topbar .topbar-right li .icon span {
  font-size: 20px;
}

#topbar .topbar-right li .icon .ic-weibo {
  color: #e05244;
}

#topbar .topbar-right li .icon .ic-weixin {
  color: #00bb29;
}

#topbar .topbar-right li .icon .ic-qq {
  color: #498ad5;
}

// 注册、登录、写文章
#topbar .topbar-right {
  .login {
    color: #969696;
    font-size: 15px;
  }

  .regiter {
    color: $headerfontactiveColor;
    border: 0.02rem solid $headerfontactiveColor;
    font-weight: 10rem;
    font-family: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
  }

  .regiter:hover {
    border-color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
    color: #ec6149;
  }

  .article {
    font-family: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
  }

  .avatar_drop {
    padding-top: 0.3rem;
    height: 1rem;
  }

  >>> .el-icon-arrow-down {
    position: relative;
  }
}

// 用户信息
#topbar >>> .el-avatar {
  display: inline-table;
}

#topbar .topbar-right .right:hover {
  background-color: #f5f5f5;
}

#topbar .topbar-right .right .msg {
  text-align: center;
  position: absolute;
  top: 60px;
  left: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  border-bottom: 3px solid #0195ff;
  background-color: #fff;
}

#topbar .topbar-right .right .msg p {
  height: 40px;
  line-height: 40px;
  width: 105px;
}

#topbar .topbar-right .right .msg p:hover {
  background-color: #0195ff;
}
</style>
