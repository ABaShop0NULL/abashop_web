import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import GoodsManage from "./goodsManage";
import ImageManage from "./imgManage";
import OrderManage from "./orderManage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    redirect: "/home",
    meta: {
      title: "后台管理系统"
    },
    children: [
      {
        path: "home",
        name: "DashboardHome",
        meta: {
          title: "首页"
        },
        component: resolve => require(["@/views/home/Index.vue"], resolve)
      }
    ]
  },
  GoodsManage,
  ImageManage,
  OrderManage,
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
  },
  {
    path:'/webIndex',
    name:'WebIndex',
    meta: {
      title: "商城首页(未登录)",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/Index.vue"], resolve)
    }
  },
  {
    path:'/webIndex2',
    name:'WebIndex2',
    meta: {
      title: "商城首页(登陆过)",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/firstindex.vue"], resolve)
    }
  },
  {
      path:'/userinfo',
      name:'Userinfo',
      meta: {
        title: "个人信息",
        keepAlive: false
      },
      components: {
        blank: resolve => require(["@/views/webManage/Userinfo.vue"], resolve)
      }
    },
  {
    path: "/cartIndex",
    name: "CarIndex",
    meta: {
      title: "购物车",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/Cart.vue"], resolve)
    }
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "订单",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/Order.vue"], resolve)
    }
  },
  {
      path:'/paySuccess',
      name:'PaySuccess',
      meta: {
        title: "订单支付成功",
        keepAlive: false
      },
      components: {
        blank: resolve => require(["@/views/webManage/paySuccess.vue"], resolve)
     }
  },
  {
      path:'/personal',
      name:'Personal',
      meta: {
        title: "个人中心",
        keepAlive: false
      },
      components: {
        blank: resolve => require(["@/views/layout/personal.vue"], resolve)
      }
    },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
