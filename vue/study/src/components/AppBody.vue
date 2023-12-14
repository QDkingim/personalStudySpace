<!--
* @description 
* @fileName AppBody.vue
* @author renxiangsan
* @date 2023/12/13 07:45:26
!-->
<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #f1f1f1">
      <div></div>
      <el-menu
        mode="vertical"
        :default-active="0"
        background-color="#f1f1f1"
        text-color="#777"
        active-text-color="#000"
      >
        <el-menu-item
          v-for="item in items"
          :index="item.index"
          :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["items"],
  components: {},

  computed: {},

  created() {},

  //mounted() {},

  methods: {},
};
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #fff !important;
}
</style>
