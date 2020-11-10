<template>
  <div>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>向导</span>
      </div>
      <div class="demo">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #673AB7">
                <i class="el-icon-user index-icon"></i>
                数据管理
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                轮播管理
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #009688">
                <i class="el-icon-goods index-icon"></i>
                商品管理
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #607D8B">
                <i class="el-icon-s-order index-icon"></i>
                订单管理
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br />
	
	
    <el-card style="border-radius: 0m;margin-bottom: 20px; width: 100%;height: 500px;">
      <div slot="header">
       	<h2>情况分析</h2>
			<div style="margin-top: 30px;">
				访问量
				<el-progress type="circle" :percentage="88" show-text="true" style="margin-left: 50px;margin-right: 70px;"></el-progress>
				反馈
				<el-progress type="circle" :percentage="21" show-text="true"></el-progress>
			</div>
			<div style="margin-top: 60px;">
				衣食
				<el-progress :text-inside="true" :stroke-width="25" :percentage="44" status="success"></el-progress>
				电子
				<el-progress :text-inside="true" :stroke-width="25" :percentage="70"></el-progress>
				母婴
				<el-progress :text-inside="true" :stroke-width="25" :percentage="50" status="exception"></el-progress>
			</div>
		</div>
    </el-card>
	

	
	
	
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>abashop后台管理系统v3.1.0</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {     
        
    };
  },
  
  mounted: function() {}
};
</script>
<style lang="scss">
.demo {
  margin: 10px;
  .grid-content {
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
    background: #d3dce6;
    .index-icon {
      font-size: 82px;
      color: #fff;
    }
  }
}
</style>
