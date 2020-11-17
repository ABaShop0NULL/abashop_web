<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
						<el-form-item prop="user1">
							<el-input type="text" placeholder="用户名" required="required" v-model="ruleForm.user1" prefix-icon="el-icon-user-solid"></el-input>
						</el-form-item>
						<el-form-item prop="pass1">
							<el-input class="phone-input" placeholder="手机号/邮箱" v-model="ruleForm.pass1" prefix-icon="el-icon-mobile-phone"></el-input>
						</el-form-item>
						<el-form-item prop="code" class="phone" v-show="yzmshow">
							<el-input v-model="ruleForm.code" placeholder="验证码" :minlength="6" :maxlength="6"></el-input>
							<el-button type="primary" @click="getCode()" class="code-btn" :disabled="!show">
								<span v-show="show">发送验证码</span>
								<span v-show="!show" class="count">{{ count }} s</span>
							</el-button>
						</el-form-item>
						<el-form-item prop="pass">
							<el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" prefix-icon="el-icon-lock"></el-input>
						</el-form-item>
						<el-form-item prop="checkPass">
							<el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.checkPass" prefix-icon="el-icon-lock"></el-input>
						</el-form-item>
						<el-form-item class="btn-form">
							<el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
							<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
						</el-form-item>
					</el-form>
