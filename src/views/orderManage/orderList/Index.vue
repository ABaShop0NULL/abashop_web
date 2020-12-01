<template>
  <div>
    <ToolBar>
      <div>
        <el-input
          placeholder="请输入订单号"
          size="small"
          style="width: 140px"
          v-model="searchParams.title"
          clearable
        ></el-input>
        <el-button type="success" size="small" @click="refresh()"
          >查询</el-button
        >
      </div>
    </ToolBar>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="orderNo" label="订单编号"> </el-table-column>      
      <el-table-column prop="pay" label="是否付款"></el-table-column>
      <el-table-column prop="state" label="是否发货"></el-table-column>
	  <el-table-column prop="date" label="下单时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="220">
        <div slot-scope="s">
       <!--   <el-button type="primary" size="small" @click="routeDemo(s.row)"
            >(待修改)</el-button> -->
			<el-button type="primary" size="small"  @click="showEditDialog = true">查看详情</el-button>
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
 
    <Detail :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
// import { topics } from "@/api/articleManage/list";
//import { resetObject } from "@/utils/common";
import Detail from "./Detail.vue";
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
		    orderNo:'001',
			price:4999,
			pay:'是',
			state:'否',
			date:'2020-11-10 15:19'
		},
		{
		    orderNo:'002',
			price:4999,
			pay:'是',
			state:'否',
			date:'2020-11-10 15:19'
		},
		{
		    orderNo:'003',
			price:4999,
			pay:'是',
			state:'否',
			date:'2020-11-10 15:19'
		},
				]
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
      this.$message.info("待添加");
    },
    refresh() {
      //this.$refs.pagination.Refresh(); //分页刷新
    },
	currentChange(currentPage){
	  this.pageNo = currentPage;
	  this.initData()//根据新的页码选取分页数据
	},
    removeItem(i) {
			this.tableData.splice(i,1);//splice删除
	
   //    this.$confirm("确定删除?", "提示", {
   //      confirmButtonText: "确定",
   //      cancelButtonText: "取消",
   //      type: "warning"
   //    })
   //      .then(() => {
   //        row.d = 0;
		 
   //        // updateStatus({ id: row.id})
   //        //   .then(r => {
   //        //     this.$message({
   //        //       type: "success",
   //        //       message: "操作成功!"
   //        //     });
   //        //     this.refresh();
   //        //   })
   //        //   .catch(() => {});
   //      })
   //      .catch(() => {});
    }
  },
   components: { Detail }
};
</script>
