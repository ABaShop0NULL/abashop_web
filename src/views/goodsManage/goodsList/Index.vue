<template>
  <div>
    <ToolBar>
      <div>
        <el-button type="primary" size="small" @click="showEditDialog = true"
          >添加商品</el-button>
      <!--  <el-button type="primary" size="small" @click="exportTable"
          >本地导出表格</el-button
        > -->
      </div>
      <div>
        <el-input
          placeholder="请输入商品名"
          size="small"
          style="width: 140px"
          v-model="searchParams.title"
          clearable
        ></el-input>
        <el-select
          v-model="searchParams.type"
          clearable
          style="width: 140px"
          placeholder="请选择商品类型"
          size="small"
        >
          <el-option label="手机" value="1"></el-option>
          <el-option label="美食" value="2"></el-option>
        </el-select>
        <el-button type="success" size="small" @click="refresh()"
          >查询</el-button
        >
        <el-button type="warning" size="small" @click="clearSearchParams()"
          >重置</el-button
        >
      </div>
    </ToolBar>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="goodsName" label="商品名"> </el-table-column>      
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="" label="图片">
        <template slot-scope="s">
          <el-image style="width: 100px; height: 100px" :src="s.row.url"></el-image>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <div slot-scope="s">
          <el-button type="primary" size="small" @click="routeDemo(s.row)"
            >修改</el-button>
          <el-button type="danger" size="small" @click="removeItem(s.row)"
            >删除</el-button
          >
        </div>
      </el-table-column>
    </el-table>
	<el-pagination background
				layout="prev, pager, next"
				@current-change="currentChange"
				:page-size="pageSize"
	  :total="total">
	</el-pagination>
 
    <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
import g1 from '@/assets/images/goods/2018110101.jpg'
import g2 from '@/assets/images/goods/2018110102.jpg'
import g3 from '@/assets/images/goods/2018110103.jpg'
import g4 from '@/assets/images/goods/2018110104.jpg'
import g5 from '@/assets/images/goods/2018110105.jpg'
import g6 from '@/assets/images/goods/2018110106.jpg'
// import { topics } from "@/api/articleManage/list";
import { resetObject } from "@/utils/common";
import Edit from "./Edit.vue";
export default {
  data() {
    return {
		pageSize: 3,//每页显示的数据
		total:0,//总条数
		pageNo:1,//当前页码默认第一页
      searchParams: {
        title: "",
        type: ""
      },
      showEditDialog: false,
      tableData: [
        {
          goodsName:'Apple MacBook Pro',
          price:2999,
					url:g1,
					detail:' 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)'
				},
				{
					goodsName:'三星 Galaxy S8',
          price:2999,
					url:g3,
					detail:' 三星 Galaxy S8（SM-G9500）4GB+64GB 谜夜黑（加勒比海盗定制版）移动联通电信4G手机 双卡双待'
				},
				{
					goodsName:'Apple iPhone 8',
          price:2999,
					url:g2,
					detail:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机'
				},
				{
					goodsName:'联想（ThinkPad）',
          price:2999,
					url:g4,
					detail:' 联想（ThinkPad） E470c（20H3A001CD）14英寸笔记本电脑（i5-6200U 8G 256G SSD 2G独显 Win10）黑色'
				},
				{
					goodsName:'佳能（Canon）',
          price:2999,
					url:g5,
					detail:' 佳能（Canon）EOS 800D 单反套机 （EF-S 18-55mm f/4-5.6 IS STM 镜头）'
				},
				{
					goodsName:'森海塞尔（Sennheiser）',
          price:2999,
					url:g6,
					detail:' 森海塞尔（Sennheiser）MOMENTUM In-Ear Wireless 馒头蓝牙入耳式耳机 黑色'
				}]
    };
  },
  created() {
    // topics()
    //   .then(r => {
    //     this.tableData = r;
    //   })
    //   .catch(() => {});
  },
  methods: {
    routeDemo() {
      // this.$message.info("待添加");
    },
    refresh() {
      //this.$refs.pagination.Refresh(); //分页刷新
    },
	currentChange(currentPage){
	  this.pageNo = currentPage;
	  this.initData()//根据新的页码选取分页数据
	},
    clearSearchParams() {
      resetObject(this.searchParams);
      this.refresh();
    },
    removeItem(i) {
		this.tableData.splice(i,1);
      // this.$confirm("确定删除?", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // })
      //   .then(() => {
      //     row.d = 0;
      //     // updateStatus({ id: row.id})
      //     //   .then(r => {
      //     //     this.$message({
      //     //       type: "success",
      //     //       message: "操作成功!"
      //     //     });
      //     //     this.refresh();
      //     //   })
      //     //   .catch(() => {});
      //   })
      //   .catch(() => {});
    }
  },
  components: { Edit }
};
</script>
