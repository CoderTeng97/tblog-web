<template>
  <div>
    <!-- 头部 -->
    <div class="login-from-head">
      <div class="login-from-head-text">
        <font>已有账户？</font>
      </div>
      <router-link to="/login">
        <button role="button" class="login-form-head-but">登 录</button>
      </router-link>
    </div>

    <!-- from 表单 -->
    <div class="login-from">
      <h1>注册Blog</h1>
      <h4>在下面输入您的详细信息</h4>

      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        :label-position="labelPosition"
        label-width="80px"
        status-icon
      >
        <el-form-item label="邮 箱" prop="email">
          <el-input v-model="ruleForm.email" type="text"></el-input>
        </el-form-item>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" type="text"></el-input>
        </el-form-item>

        <el-form-item label="密 码" prop="password">
          <el-input type="password" v-model="ruleForm.password" show-password></el-input>
        </el-form-item>

        <el-form-item style="text-align: center;padding-top: 10px;">
          <el-button type="primary" class="row-login" @click="handleRegistry('ruleForm')">注 册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Registry, isExistEmail, isExistUserName } from "@/api/login";
import { Message } from "element-ui";
//https://blog.csdn.net/qazwsx_edc1/article/details/80975957
export default {
  name: "RegistryFrom",
  data() {
    const checkEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (value.indexOf("@") === -1) {
        callback(new Error("请输入合法邮箱"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          // this.$refs.ruleForm.validateField("验证通过");
          isExistEmail(value).then(res => {
            console.log(res);
            if(value == undefined){
              callback(new Error('请输入邮箱'));
            }else if(value !== '' && res.code==7){
              callback(new Error('该用户名已经存在，请重新输入'));
            }else{
              callback();
            }
          });
        }
      }
    };
    return {
      loading: false,
      labelPosition: "top",
      ruleForm: {
        email: "",
        password: "",
        username: ""
      },
      rules: {
        email: [
          { required: true,validator: checkEmail, trigger: 'blur' }
          // { required: true, message: "请输入邮箱", trigger: "blur" },
          // { type: "email", message: "请输入合法的邮箱地址" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 注册接口
    async handleRegistry(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.loading = true;
          let userinfo = this.ruleForm;
          Registry(userinfo.email, userinfo.username, userinfo.password).then(
            res => {
              this.loading = false;
              if (res && res.code === 200) {
                let data = res.data;
                console.log(res);
                this.$router.push({ path: "/login" });
              }
              if (res == null) {
                Message({
                  title: "注册失败",
                  message: msg,
                  duration: 0
                });
              }
            }
          );
        } else {
          return false;
        }
      });
    },

    //邮箱验证
    async isExistEmail(value){
      await isExistEmail(value).then(res => {
          console.log(res);
          if(value == undefined){
           callback(new Error('请输入邮箱'));
          }else if(value !='' && res.ResultType==7){
            callback(new Error('该用户名已经存在，请重新输入'));
          }else{
            callback();
          }
      });
    },

     //用户名验证
    async isExistUserName(value){
      await isExistUserName(value).then(res => {
          console.log(res);
      });
    },
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

.login-from-head {
  position: absolute;
  right: 0px;
  top: 0px;
  margin-top: 38px;
  margin-bottom: 46px;
  font-size: 13px;
  color: rgb(89, 99, 119);
  letter-spacing: 0px;
  line-height: 36px;
  z-index: 2;

  .login-from-head-text {
    position: absolute;
    display: contents;
    right: 0px;
    top: 0px;
    font-family: $logofont;
    margin-top: 38px;
    margin-bottom: 46px;
    font-size: 13px;
    color: rgb(89, 99, 119);
    letter-spacing: 0px;
    line-height: 36px;
    z-index: 2;
  }

  .login-from-head-text font {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.125px;
    color: $logoColor;
  }

  .login-form-head-but {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.125px;
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    color: $logoColor;
    height: 36px;
    border-radius: 32px;
    transition: all 0.2s cubic-bezier(0.2, 0.91, 0.85, 0.96) 0s;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(199, 202, 209);
    border-image: initial;
    padding: 0px 24px;
    font-family: $logofont;
  }
}

.login-from >>> .el-form-item__label {
  line-height: 20px;
}

.login-from {
  width: 60%;
  display: table;
  padding: 50px 0 0 64px;
}

.login-from .row-login {
  background-color: $btnColor;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0px 24px;
  line-height: 24px;
  letter-spacing: 0.125px;
  line-height: 48px;
  min-width: 160px;
  border-radius: 32px;
  font-family: $logofont;
}

.login-from h1:nth-of-type(1) {
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  color: $logoColor;
  margin-bottom: 8px !important;
}

.login-from h4:nth-of-type(1) {
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.125px;
  color: rgb(34, 37, 43);
  margin-bottom: 32px;
}

.row-login {
  width: 100%;
}

@media (min-width: 600px) {
  .login-from-head {
    margin-right: 38px;
  }
}
</style>


