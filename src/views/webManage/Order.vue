<template>
  <div>
	  <h3 style="text-align: center;margin-top: 20px;">我的订单</h3>
	  
    <el-table :data="tableData" style="margin:40px auto;width: 90%" border>
      <el-table-column >
       <template slot-scope="props">
          <div style="margin-top: 20px" slot="append">
            <el-row>
              <el-col :span="12">
                <!-- <div class="grid-content">地址：{{props.row.tableData.hasOwnProperty('address')?props.row.tableData.address.address:''}}</div> -->
              <div class="grid-content">地址：湖北省宜昌市西陵区</div>
			  </el-col>
              <el-col :span="6">
               <!-- <div class="grid-content">物流信息：{{props.row.shipname}}</div> -->
			   <div class="grid-content">物流信息：已达宜昌市物流中心</div>
              </el-col>
              <el-col :span="6">
                <!-- <div class="grid-content">物流单号：{{props.row.shipcode}}</div> -->
				 <div class="grid-content">物流单号：201711111091</div>
              </el-col>
            </el-row>
          </div>
		  
       <el-table
            :data="props.tableData"
            style="width: 100%"
            border
            :show-header="isShow">
            <el-table-column>
              <template slot-scope="scope"> 
              <!--   <el-image
                  style="width: 150px; height: 150px;"
                  :src="serverImageUrl+'goods/'+scope.row.goods.imgpath"
                ></el-image> -->
				  <el-image style="width: 100px; height: 100px" :src="scope.row.url"></el-image>
				</template>
            </el-table-column>
			
            <el-table-column>
              <template slot-scope="scope">{{scope.row.goodsName}}</template>
            </el-table-column>
			
            <el-table-column>
              <template slot-scope="scope">{{scope.row.price}}</template>
            </el-table-column>
			
            <el-table-column>
              
               <!-- <el-button
                  size="mini"
                  type="danger"
                 @click="handleDelete(scope.$index, scope.row)"
                >退款</el-button> -->
		 		<el-button size="mini" type="danger">退款</el-button>
            </el-table-column>
          </el-table> 
		  
       </template>
      </el-table-column>
    <!--  <el-table-column prop="createtime" label="下单日期" width="180"></el-table-column>
      <el-table-column prop="orderno" label="订单号" width="180"></el-table-column>
      <el-table-column label="总计">
        <template slot-scope="scope">{{ scope.row.total|toDecimal }}</template>
      </el-table-column> -->
   </el-table>
  </div>
</template>

<script>
//import { orderList, orderDetailList } from "@/api/orderManage/order";
//import { serverApiUrl } from "@/config/apiUrl";
import g1 from '@/assets/images/goods/2018110101.jpg'
export default {
  data() {
    return {
      //serverImageUrl: serverApiUrl + "/upload/",
     tableData: [
       {
			 goodsName:'Apple MacBook Pro',
			 price:2999,
			 url:g1,
		}],
      isShow: false //不需要表头
    };
  },
  // created() {
  //   orderList({ userid: 1 })
  //     .then(r => {
  //       this.tableData = r.map(k=>{
  //           k.tableData = {}
  //           return k
  //       });
  //     })
  //     .catch(() => {});
  // },
  methods: {
    // load(row) {
    //   orderDetailList({ orderid: row.orderid })
    //     .then(r => {
    //         row.tableData = r;
    //     })
    //     .catch(() => {});
    // }
  }
};
</script>
<style lang="scss">
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>