<template>
  <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center">
    <el-form ref="loginform" :rules="rules" :model="loginform" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginform.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="loginform.pass" show-password></el-input>
      </el-form-item>
	  <el-form-item label="验证码" prop="num">
	    <el-input v-model="loginform.num"></el-input>
	  </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登陆</el-button>
		<el-button >取消</el-button>
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
// import { login } from "@/api/user/user";
export default {
  data() {
    return {
      loginform: {
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
	     login() {
	  	   //用户
	     	if(this.loginform.name=='aaa2'&&
	     	this.loginform.pass=='12345'){
	     			setToken("HJDF844GDFG5D8J7FGHFG5");
	     		  this.$router.push("/webIndex2");
	  } else if(this.loginform.name=='aaa1'&&
	     	     this.loginform.pass=='123'){
	  		   setToken("HJDF844GDFG5D8J7FGHFG5");
	  		   this.$router.push("/");
	  	   }else {
	           this.$message("用户名或密码错误！！");
	           return false;
	         }
	  
	  },
    // clicklogin(loginform) {//登陆验证
  	 //  this.$refs[loginform].validate((valid) => {
  	 //            if (valid) {
  		// 			login({username:this.loginform.name,
  		// 				   password:this.loginform.pass})
  		// 			  .then(r => {
  		// 			    console.log(r);
  						
  		// 					setToken("HJDF844GDFG5D8J7FGHFG5");
  		// 					this.$router.push("/");
  						
  		// 			  })
  		// 			  .catch(() => {});
  		// 			}else {
  		// 			this.$message('用户名或密码错误！！');
  		// 			return false;
  		// 			}
  	 //          });
    // },
  	// resetForm(loginform) {
  	//         this.$refs[loginform].resetFields();
  	//       }
  },
  mounted: function() {}
};
</script>
