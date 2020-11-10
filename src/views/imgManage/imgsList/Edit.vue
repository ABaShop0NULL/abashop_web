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
      :rules="rules"
      ref="editForms"
      class="edit-forms"
      label-position="left"
      :label-width="labelWidth"
    >
      
      <el-form-item label="图片" prop="url">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="forms.url" :src="forms.url" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">取 消</el-button>
      <el-button type="primary" @click="submit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {
  Required,
  Float2,
  Boolean,
  FillerFieldRules
} from "@/utils/validateRules";

import { fillerLeft, resetObject } from "@/utils/common";

export default {
  props: {
    title: {
      type: String,
      default: "编辑"
    },
    dialogWidth: {
      type: String,
      default: "700px"
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    showEditDialog: Boolean
  },
  data() {
    return {
      forms: {
        url: ""
      },
      rules: {
        ...FillerFieldRules(["name", "desc"], Required),
        price: [Required, Float2],
        type: Boolean
      }
    };
  },
  methods: {
    submit() {
      this.$refs.editForms.validate(valid => {
        if (valid) {
          this.$message({
            message: "字段验证通过，提交请求，成功后刷新分页！",
            type: "success"
          });
          this.$emit("success"); //通知列表分页刷新
          // add(this.forms)
          //   .then(r => {
          //     this.$message({
          //       message: "创建机构成功！",
          //       type: "success"
          //     });
          //     this.$emit("success");
          //   })
          //   .catch(() => {});
        } else {
          this.$message({
            message: "请按照提示正确填写内容！",
            type: "warning"
          });
          return false;
        }
      });
    },
    openDialog() {
      resetObject(this.forms);
      this.$set(this.forms, "id", null);
      this.$refs.editForms.resetFields();
    },
    FillerFormField(id, data) {
      //可以外部填充回写做编辑用，也可以请求详情接口填充表单
      this.$set(this.forms, "id", id);
      fillerLeft(this.forms, data);
    },
    handleAvatarSuccess(res, file) {
      this.forms.url = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
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
