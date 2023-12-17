<!--  -->
<template>
  <div class="content-container">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="基础设置" name="1">
        <GoodsBaseSetting></GoodsBaseSetting>
      </el-tab-pane>
      <el-tab-pane label="价格库存" name="2">
        <GoodsPriceSetting></GoodsPriceSetting>
      </el-tab-pane>
      <el-tab-pane label="商品详情" name="3">
        <GoodsDetailSetting></GoodsDetailSetting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GoodsBaseSetting from "./GoodsBaseSetting.vue";
import GoodsDetailSetting from "./GoodsDetailSetting.vue";
import GoodsPriceSetting from "./GoodsPriceSetting.vue";
export default {
  data() {
    return {
      activeTab: "1",
    };
  },
  components: { GoodsBaseSetting, GoodsDetailSetting, GoodsPriceSetting },
};
</script>

<style scoped></style>
