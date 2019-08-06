<template>
  <header id="topbar">
    <el-row>
      <el-col :span="4" class="topbar-left">
        <a href="#">
          <img src="../../assets/logo.png" />
        </a>
      </el-col>

      <el-col :span="10" class="topbar-center">
        <ul>
          <li>
            <a href="javascript:void(0)">首页</a>
          </li>
          <li>
            <a href="javascript:void(0)">网址数据监控</a>
          </li>
          <li>
            <a href="javascript:void(0)">关于博客</a>
          </li>
        </ul>
      </el-col>

      <el-col :span="10" class="topbar-right">
        <ul>
          <li>
            <div class="icon-search">
              <el-input type="text" placeholder="请输入搜索内容" class="search" v-model="params.search" />
              <i class="el-icon-search"></i>
            </div>
          </li>
          <li>
            <button class="icon">
              <span class="iconfont ic-weixin">&#xe65d;</span>
            </button>
          </li>
          <li>
            <button class="icon">
              <span class="iconfont ic-weibo">&#xe629;</span>
            </button>
          </li>
          <li>
            <button class="icon">
              <span class="iconfont ic-qq">&#xe7a0;</span>
            </button>
          </li>
          <li class="right" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
            <a href="javascript:void(0)" class="demo-type">
                <el-avatar icon="el-icon-user-solid" > {{user.userName}}</el-avatar>
            </a>  
            <div class="msg" v-if="flag">
              <p @click="getUserInfo()">用户中心</p>
              <p class="exit" @click="exit()">退出</p>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations } from "vuex";
export default {
  name: "BlogHeader",
  data() {
    return {
      flag: false,
      params: {
        search: ""
      },
      user: {
        userName: "user"
      }
    };
  },
  methods: {
    getUserInfo() {
      //用户信息中心
    },
    exit() {
      //退出
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/main.styl';

#topbar {
  padding: 0;
  margin: 0;
  position: relative;
  background-color: $headerColor;
  height: 80px;
  line-height: 80px;
  width: 100%;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 40px 0px;
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
  padding: 16px 40px;
  text-decoration: none;
  transition: color 0.15s ease-out 0s;
  font: bold 14px / 14px 'Maison Neue', sans-serif;
}

#topbar .topbar-center ul li a {
  color: $headerfontColor;
}

#topbar .topbar-center ul li a:hover {
  color: $headerfonthoverColor;
}

#topbar .topbar-right ul li {
  display: inline-block;
  margin-right: 25px;
  position: relative;
}

#topbar .topbar-right .icon-search {
  position: relative;
}

#topbar .topbar-right .el-icon-search {
  position: absolute;
  margin-top: 35px;
  margin-left: -25px;
  color: #000;
  cursor pointer;
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

// 用户信息
#topbar >>> .el-avatar {
    display inline-table;  
}

#topbar .topbar-right .right:hover {
    background-color #f5f5f5;    
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
