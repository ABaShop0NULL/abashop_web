import Layout from "@/views/layout/App.vue";
export default {
  path: "/imgs_manage",
  component: Layout,
  name: "ImgsManage",
  redirect: "/imgs_manage/list",
  meta: {
    title: "轮播管理"
  },
  children: [
    {
      path: "list",
      name: "ImgsManageList",
      meta: {
        title: "轮播列表"
      },
      component: resolve =>
        require(["@/views/imgManage/imgsList/Index.vue"], resolve)
    },
  ]
};
