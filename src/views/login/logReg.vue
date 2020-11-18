<template>
		<div class="index">
			<ul class="topNav">
					<li :class="[showHot==0?'active':'']" @click="showHot=0">登陆</li>
					<li :class="[showHot==1?'active':'']" @click="showHot=1">注册</li>
			</ul>
			<Login v-show="showHot==0"></Login>
			<Register v-show="showHot==1"></Register>
		</div>
</template>

<script>
	import Login from '@/views/login/Login.vue'
	import Register from '@/views/login/Register.vue'
	export default {
		data() {
			return {
				showHot: 0
			}
		},
		components: {
			Login,
			Register,
		}
		
	};
</script>

<style>
 	.topNav {
		display:flex;
		flex-direction: row; 
		justify-content: space-around;
		align-items: center;
	}
	
	.topNav li {
		padding: 12px;
		cursor: pointer;
		list-style: none;
	}
	
	.active {
		color: rgb(229, 72, 71);
		border-bottom: 2px solid rgb(229, 72, 71);
	}
	
	.main {
		padding: 50px;
	}
</style>