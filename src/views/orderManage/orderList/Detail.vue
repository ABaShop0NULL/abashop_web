<template>
  <el-dialog
    @opened="openDialog"
    :width="dialogWidth"
    :title="title"
    :visible.sync="showEditDialog"
    :show-close="false"
    :close-on-click-modal="false"
  >
  <el-form
    :model="forms"
    ref="editForms"
    class="edit-forms"
    label-position="left"
    :label-width="labelWidth"
  >
    <el-form-item label="商品名称" prop="goodsName">
      <el-input v-model="forms.goodsName"></el-input>
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input v-model="forms.price"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="detail">
      <el-input type="textarea" v-model="forms.detail"></el-input>
    </el-form-item>
    <el-form-item label="图片" prop="">
      <template slot-scope="s">
        <el-image style="width: 100px; height: 100px" :src="s.url" ></el-image>
      </template>
    </el-form-item>
  </el-form>
  
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="$emit('close')">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { resetObject } from "@/utils/common";
import g1 from '@/assets/images/goods/2018110101.jpg'
export default {
  props: {
    title: {
      type: String,
      default: "详情"
    },
    dialogWidth: {
      type: String,
      default: "600px"
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    showEditDialog: Boolean,
  },
  data() {
    return {
      forms: {
        goodsName:'Apple MacBook Pro',
        price:2999,
        url:g1,
        detail:' 15.4英寸笔记本电脑 银色(Core i7 处理器/16GB内存/256GB SSD闪存/Retina屏 MJLQ2CH/A)'
      }
    };
  },
  methods: {
    // submit() {
    //   this.$refs.editForms.validate(valid => {
    //     if (valid) {
    //       this.$message({
    //         // message: "",
    //         // type: ""
    //       });
    //       this.$emit("success"); //通知列表分页刷新
    //       // add(this.forms)
    //       //   .then(r => {
    //       //     this.$message({
    //       //       message: "创建机构成功！",
    //       //       type: "success"
    //       //     });
    //       //     this.$emit("success");
    //       //   })
    //       //   .catch(() => {});
    //     } else {
    //       this.$message({
    //         message: "请按照提示正确填写内容！",
    //         type: "warning"
    //       });
    //       return false;
    //     }
    //   });
    // },
    openDialog() {
      resetObject(this.forms);
      this.$set(this.forms, "id", null);
      this.$refs.editForms.resetFields();
    },
    // FillerFormField(id, data) {
    //   //可以外部填充回写做编辑用，也可以请求详情接口填充表单
    //   this.$set(this.forms, "id", id);
    //   fillerLeft(this.forms, data);
    // },
    // handleAvatarSuccess(res, file) {
    //   this.forms.url = URL.createObjectURL(file.raw);
    // },
  }
};
</script>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
