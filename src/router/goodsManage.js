export default {
  path: "/goods_manage",
  name: "GoodsManage",
  redirect: "/goods_manage/list",
  meta: {
    title: "商品主页"
  },
  children: [
    {
      path: "list",
      name: "GoodsManageList",
      meta: {
        title: "商品管理"
      },
      component: resolve =>
        require(["@/views/goodsManage/goodsList/Index.vue"], resolve)
    },
  ]
};
