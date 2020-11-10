import Layout from "@/views/layout/App.vue";
export default {
  path: "/data_manage",
  component: Layout,
  name: "DataManage",
  redirect: "/data_manage/list",
  meta: {
    title: "用户管理"
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
