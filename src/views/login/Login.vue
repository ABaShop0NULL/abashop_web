<template>
  <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center">
    <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="loginForm.pass" show-password></el-input>
      </el-form-item>
	  <el-form-item label="验证码" prop="num">
	    <el-input v-model="loginForm.num"></el-input>
	  </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="regis()">注册</el-button>
        <el-row>
          
          <el-col :span="12" style="text-align:right">
            <el-link type="primary">忘记密码</el-link>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setToken } from "@/utils/common";
//import { login } from "@/api/user/user";
export default {
  data() {
    return {
      loginForm: {
        name: "",
        pass: "",
		num:""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
		
      }
    };
  },
  methods: {
   regis(){
		    this.$router.push("/register");
	  },
   login() {
	   //用户
   	if(this.loginForm.name=='aaa2'&&
   	this.loginForm.pass=='12345'){
   			setToken("HJDF844GDFG5D8J7FGHFG5");
   		  this.$router.push("/webIndex2");
   	
     //登陆验证
     // this.$refs[loginForm].validate(valid => {
     //   if (valid) {
     
     //     login({
     //       userName: this.loginForm.login_user_name,
     //       password: this.loginForm.login_password,
     //        verifyCode: this.loginForm.login_verifyCode
     //     })
     //       .then(r => {
     //         console.log(r);
     //         if (r != null) {
     //           // setToken("HJDF844GDFG5D8J7FGHFG5");
     //           this.$router.push("/personhome");
     //         }
     //       })
     //       .catch(() => {});
	      //商家
       } else if(this.loginForm.name=='aaa1'&&
   	     this.loginForm.pass=='123'){
		   setToken("HJDF844GDFG5D8J7FGHFG5");
		   this.$router.push("/");
	   }else {
         this.$message("用户名或密码错误！！");
         return false;
       }
     //});
   }
  }
};
</script>
