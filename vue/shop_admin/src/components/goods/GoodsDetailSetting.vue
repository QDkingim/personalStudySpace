<template>
  <div style="margin-bottom: 20px">
    <GoodsEdit @contentChange="contentChange"></GoodsEdit>
  </div>
  <el-container class="content-row">
    <el-button type="success" plain @click="submit">提交</el-button>
    <div style="margin-left: 40px"></div>
    <el-button type="warning" plain @click="cancel">取消</el-button>
  </el-container>
</template>

<script>
import GoodsEdit from "./GoodsEdit.vue";
export default {
  data() {
    return {
      content: "",
    };
  },
  components: { GoodsEdit },
  methods: {
    contentChange(content) {
      this.content = content;
    },
    cancel() {
      this.$router.go(-1);
    },
    submit() {
      this.$message({
        type: "success",
        message: "设置详情HTML:" + this.content,
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
