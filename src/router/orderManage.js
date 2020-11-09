import Layout from "@/views/layout/App.vue";
export default {
  path: "/order_manage",
  component: Layout,
  name: "OrderManage",
  redirect: "/order_manage/list",
  meta: {
    title: "订单管理"
  },
  // children: [
  //   {
  //     path: "list",
  //     name: "ImgsManageList",
  //     meta: {
  //       title: "轮播图列表"
  //     },
  //     component: resolve =>
  //       require(["@/views/imgManage/imgsList/Index.vue"], resolve)
  //   },
  // ]
};
