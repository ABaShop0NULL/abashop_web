<!-- 商品首页 -->
<template>
	<div>		
		<div class="line"></div>
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#1a472a"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item index="1">商品首页</el-menu-item>
		<!--  <el-submenu index="2">
		    <template slot="title">商品类型(待完善)</template>
		    <el-menu-item index="2-1">电子</el-menu-item>
		    <el-menu-item index="2-2">美食</el-menu-item>
		    <el-menu-item index="2-3">护肤</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">居家日用</template>
		      <el-menu-item index="2-4-1">毛巾</el-menu-item>
		      <el-menu-item index="2-4-2">牙刷</el-menu-item>
		      <el-menu-item index="2-4-3">牙膏</el-menu-item>
		    </el-submenu>
		  </el-submenu> -->
			 <el-menu-item index="3" style="float: left;"  @click.native="$router.push({name:'Order'})">订单(待完善)</el-menu-item>
			  <el-menu-item index="4" style="float: left;" @click.native="$router.push({name:'CarIndex'})">
					 查看我的购物车(待完善)</el-menu-item>
		
					
					
					<el-menu-item index="7" style="float: left;" @click.native="$router.push({name:'DashboardHome'})">
										后台登录(现在为了方便，到时候删)</el-menu-item>
										
	
					<el-submenu index="6" style="float: right;">
						  <template slot="title">个人中心(待修改)</template>
						  <el-menu-item index="6-1"  @click.native="$router.push({name:'Userinfo'})">个人信息(待修改)</el-menu-item>
						  <el-menu-item index="6-2" @click="logout">退出</el-menu-item>
					</el-submenu>
		</el-menu>
		<!-- 轮播图 -->
		 <div class="box">	   
		    <el-carousel height="450px">
		      <el-carousel-item v-for="item in carouselList" :key="item.name">
		        <h1 class="small">{{ item.name }}</h1>
				<el-image style="width: 790px; height:340px" :src="item.url"></el-image>
		      </el-carousel-item>
		    </el-carousel>
		  </div>
		  <!-- 商品列表 ，每一列显示3个-->
		 <div class="goodsLists">
			<el-row :gutter="20">
				<el-col :span="8" v-for="item in goodsList" :key="item.goodsName">
          <div class="item">
					<el-image style="width: 350px; height: 350px;" :src="item.url"></el-image>
					<h3>{{item.goodsName}}</h3>
					<p>{{item.detail}}</p>
          </div>
				</el-col>
				
			</el-row>
		 </div> 
		  
	</div>
</template>

<script>
	import c01 from '@/assets/images/carousel/1.jpg'
	import c02 from '@/assets/images/carousel/2.jpg'
	import c03 from '@/assets/images/carousel/3.jpg'
	import c04 from '@/assets/images/carousel/4.jpg'
	
	import g1 from '@/assets/images/goods/2018110101.jpg'
	import g2 from '@/assets/images/goods/2018110102.jpg'
	import g3 from '@/assets/images/goods/2018110103.jpg'
	import g4 from '@/assets/images/goods/2018110104.jpg'
	import g5 from '@/assets/images/goods/2018110105.jpg'
	import g6 from '@/assets/images/goods/2018110106.jpg'
	
	export default {
	    data() {
	      return {
	        
	        activeIndex2: '1',
			carouselList:[
				{
					name:'时尚生活温心鲜果',
					url:c01
				},
				{
					name:'高端家电品质享受',
					url:c02
				},
				{
					name:'拯救钱包，买一送一',
					url:c03
				},
				{
					name:'i7爆款，霸气登场',
					url:c04
				},
			],
			
			// 商品信息
			goodsList:[
				{
					goodsName:'Apple MacBook Pro',
					url:g1,
					detail:' 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)'
				},
				{
					goodsName:'三星 Galaxy S8',
					url:g3,
					detail:' 三星 Galaxy S8（SM-G9500）4GB+64GB 谜夜黑（加勒比海盗定制版）移动联通电信4G手机 双卡双待'
				},
				{
					goodsName:'Apple iPhone 8',
					url:g2,
					detail:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机'
				},
				{
					goodsName:'联想（ThinkPad）',
					url:g4,
					detail:' 联想（ThinkPad） E470c（20H3A001CD）14英寸笔记本电脑（i5-6200U 8G 256G SSD 2G独显 Win10）黑色'
				},
				{
					goodsName:'佳能（Canon）',
					url:g5,
					detail:' 佳能（Canon）EOS 800D 单反套机 （EF-S 18-55mm f/4-5.6 IS STM 镜头）'
				},
				{
					goodsName:'森海塞尔（Sennheiser）',
					url:g6,
					detail:' 森海塞尔（Sennheiser）MOMENTUM In-Ear Wireless 馒头蓝牙入耳式耳机 黑色'
				}				
			]
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  logout() {
		    this.$router.push({name:'Login'})
		  }
	    }
	  }
</script>

<style lang="scss">
	.box{
		text-align: center;
		padding: 30px;
		background: #3b734f;
	}
	.goodsLists{
		margin: 30px 10px;
		text-align: center;
		
	}
	.box h1{
		color: #FFFFFF;
		margin-bottom: 20px;
		
	}
	.item{
    height: 400px;
  }
	
</style>
