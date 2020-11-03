import Vue from "vue";
import VueRouter from "vue-router";
//import Layout from "@/views/layout/App.vue";
import GoodsManage from "./goodsManage";
Vue.use(VueRouter);

const routes = [
	{
	  path: "/",
	  name: "Home",
	  meta: {
	    title: "首页",
	    keepAlive: false
	  },
	  components: {
	    blank: resolve => require(["@/views/webManage/index.vue"], resolve)
	  }
	},
	{
	  path: "/goods_manage",
	  name: "goods",
	  meta: {
	    title: "商品首页",
	    keepAlive: false
	  },
	  components: {
	    blank: resolve => require(["@/views/goodsManage/goodsList/Index.vue"], resolve)
	  }
	},
	{
	  path: "/carIndex",
	  name: "CarIndex",
	  meta: {
	    title: "购物车",//相当于title标签 
	  },
	  components: {
	    blank: resolve => require(["@/views/webManage/Cart.vue"], resolve)
	  }
	},

  GoodsManage,
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/Login.vue"], resolve)
    }
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: "注册",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/Register.vue"], resolve)
    }
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
