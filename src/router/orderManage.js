import Layout from "@/views/layout/App.vue";
export default {
  path: "/order_manage",
  component: Layout,
  name: "OrderManage",
  redirect: "/order_manage/list",
  meta: {
    title: "订单管理"
  },
 children: [
    {
      path: "list",
      name: "OrderManageList",
      meta: {
        title: "订单页面"
      },
      component: resolve =>
        require(["@/views/orderManage/orderList/Index.vue"], resolve)
    },
  ]
};
