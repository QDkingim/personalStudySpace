<template>
  <div>
    <el-container class="content-row">
      <div class="input-tip">商品名称:</div>
      <div class="input-field">
        <el-input v-model="queryParams.name" />
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">商品简介:</div>
      <div class="input-field">
        <el-input v-model="queryParams.desc" type="textarea" :rows="3" />
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">商品封面:</div>
      <div class="input-field">
        <el-upload :limit="5" :auto-upload="false" list-type="picture-card">
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">列表图片:</div>
      <div class="input-field">
        <el-upload :limit="5" :auto-upload="false" list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">上架日期:</div>
      <div class="input-field">
        <el-date-picker
          v-model="queryParams.timeRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">商品分类:</div>
      <div class="input-field">
        <el-select
          v-model="queryParams.category"
          class="m-2"
          placeholder="Select"
        >
          <el-option key="0" label="男装" :value="0" />
          <el-option key="1" label="男鞋" :value="1" />
          <el-option key="2" label="围巾" :value="2" />
        </el-select>
      </div>
      <div style="margin-top: 6px">
        <el-button type="primary" size="small" round @click="addCategory"
          >添加分类</el-button
        >
      </div>
    </el-container>
    <el-container class="content-row">
      <el-button type="success" plain @click="submit">提交</el-button>
      <div style="margin-left: 40px"></div>
      <el-button type="warning" plain @click="cancel">取消</el-button>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryParams: {
        name: "",
        desc: "",
        timeRange: "",
        category: 0,
      },
    };
  },
  methods: {
    submit() {
      this.$message({
        type: "success",
        message: "设置商品基本属性:" + JSON.stringify(this.queryParams),
      });
    },
    cancel() {
      this.$router.go(-1);
    },
    addCategory() {
      this.$router.push({
        name: "goodsCategory",
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
