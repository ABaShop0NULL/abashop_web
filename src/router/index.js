import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import GoodsManage from "./goodsManage";

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
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "后台登录",
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
      title: "后台注册",
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
      title: "商城首页",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/Index.vue"], resolve)
    }
  },
  {
    path: "/cartIndex",
    name: "CarIndex",
    meta: {
      title: "后台注册",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/Cart.vue"], resolve)
    }
  },
  {
    path: "/aboutUs",
    name: "Aboutus",
    meta: {
      title: "后台注册",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/webManage/Aboutus.vue"], resolve)
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
