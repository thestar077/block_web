<template>
  <div class="login_container">
    <div class="login_box">
      <h1 style="margin-top:60px;color:#fff;">Register</h1>
      <el-form
        ref="loginFormRef"
        label-width="0"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
      >
       <el-form-item>
          <el-button @click="goHome" type="text" style="float: left;">Guest To Visit</el-button>
        </el-form-item>
        <el-form-item prop="name">
          <el-input
            placeholder="name"
            prefix-icon="iconfont icon-user"
            v-model="loginForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="password"
            prefix-icon="iconfont icon-3702mima"
            show-password
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            placeholder="email"
            prefix-icon="iconfont icon-user"
            v-model="loginForm.email"
          ></el-input>
        </el-form-item>
        <el-form-item prop="firstName">
          <el-input
            placeholder="firstName"
            prefix-icon="iconfont icon-user"
            v-model="loginForm.firstName"
          ></el-input>
        </el-form-item>
         <el-form-item prop="lastName">
          <el-input
            placeholder="lastName"
            prefix-icon="iconfont icon-user"
            v-model="loginForm.lastName"
          ></el-input>
        </el-form-item>
         <el-form-item prop="telphone">
          <el-input
            placeholder="telphone"
            prefix-icon="iconfont icon-user"
            v-model="loginForm.telphone"
          ></el-input>
        </el-form-item>
        <el-form-item>
           <el-button @click="login" type="primary" round>Login</el-button>
          <el-button @click="register" type="success" round>Register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: "",
      },

      //表单验证规则对象
      loginFormRules: {
        name: [
          { required: true, message: "Enter one user name", trigger: "blur" },
          { min: 3, max: 10, message: "The length is between 3 and 10 characters", trigger: "blur" }
        ],
        password: [
          { required: true, message: "Please input a password", trigger: "blur" },
          { min: 3, max: 10, message: "The length is between 3 and 10 characters", trigger: "blur" }
        ],
        email: [
          { required: true, message: "Please input the email", trigger: "blur" },
        ],
        firstName: [
          { required: true, message: "Please input the firstName", trigger: "blur" },
        ],
        lastName: [
          { required: true, message: "Please input the lastName", trigger: "blur" },
        ],
        telphone: [
          { required: true, message: "Please input the telphone", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    login(){
      this.$router.push("/login");
    },
    register() {
      // console.log(this);  this指向当前组件的实例
      //validate方法：对整个表单进行校验的方法，参数为一个回调函数
      this.$refs.loginFormRef.validate(async valid => {
        //表单验证的结果是false，则不发起请求
        if (!valid) return;
        //解构出data重命名为res
        const { data: res } = await this.$http.post("register", this.loginForm);
        //提示message
        console.log(res,'res')
        if (res.code !== 1000) return this.$message.error("Register has failed");
        this.$message.success("Register was successful");
        console.log("调用注册API返回");
        console.log(res);
        this.$router.push("/login");
      });
    },
    goHome(){
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  width: 100%;
  position: fixed;
  background-image: url("../assets/picture/homePic/loginback.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login_box {
  width: 550px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00000080;
  color: #fff;
  text-align: center;
}
.w400{
  width: 400px;
}
.login_form {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  padding: 0 20px;
  box-sizing: border-box; //把边框和内边距放入框中
}
</style>
