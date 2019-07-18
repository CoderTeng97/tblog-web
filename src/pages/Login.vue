<template>
  <div class="entry">
    <el-row>
      <el-col :span="8" style="margin-top:10px;">
        <el-input id="email" v-model="email" placeholder="请输入帐号">
          <template slot="prepend">邮箱</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" style="margin-top:10px;">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" style="margin-top:10px;">
        <el-button id="login" @click="login"  style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods:{
    login(){
      this.$router.push({name:'release'});
    }
  }
};
</script>

<style  scoped>
.entry {
  margin-top: 20%;
  margin-left: 40%;
}
</style>


