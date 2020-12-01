import goodsManage from "./goodsManage.js";
import imgsManage from "./imgManage.js"
import orderManage from "./orderManage.js"
/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
let home = {
  name: "首页",
  path: "/home",
  permissionsKey: "",
  icon: "fa fa-tachometer"
};

export default {
  home,
  goodsManage,
  imgsManage,
  orderManage,
  //helpCenter
};
