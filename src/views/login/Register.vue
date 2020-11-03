<template>
	<div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="手机号" prop="phone">
		    <el-input v-model="ruleForm.phone"></el-input>
		  </el-form-item>
		  <el-form-item label="验证码" prop="num">
		    <el-input v-model="ruleForm.num"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="pass">
		      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
		  </el-form-item>
		    <el-form-item label="确认密码" prop="checkPass">
		      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
		    </el-form-item>
		  
		  <el-form-item>
		      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
		      <el-button @click="resetForm('ruleForm')">重置</el-button>
		    </el-form-item>  
		  
		</el-form>
	</div>
</template>

<script>
	 export default {
	    data() {
			var validatePass = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请输入密码'));
			        } else {
			          if (this.ruleForm.checkPass !== '') {
			            this.$refs.ruleForm.validateField('checkPass');
			          }
			          callback();
			        }
			      };
			      var validatePass2 = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请再次输入密码'));
			        } else if (value !== this.ruleForm.pass) {
			          callback(new Error('两次输入密码不一致!'));
			        } else {
			          callback();
			        }
			      };
	      return {
	        ruleForm: {
	          phone: '',
	          num:'',
			  pass: '',
			  checkPass: ''
	         
	        },
	        rules: {
	          phone: [
	            { required: true, message: '请输入手机号', trigger: 'blur' },
				
	          ],
	          num: [
	            { required: true, message: '请输入验证码', trigger: 'blur' },
	          ],
			  pass: [
			    { validator: validatePass, trigger: 'blur' }
			  ],
			  checkPass: [
			    { validator: validatePass2, trigger: 'blur' }
			  ]
	          
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	  }
</script>

<style>
</style>
