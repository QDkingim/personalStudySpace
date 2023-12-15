<!--
* @description 
* @fileName AppHeader.vue
* @author renxiangsan
* @date 2023/12/13 07:37:46
!-->
<template>
  <el-container style="margin: 0; padding: 0">
    <el-header style="margin: 0; padding: 0">
      <div id="title">Vue学习笔记</div>
    </el-header>
    <el-main style="margin: 0; padding: 0">
      <el-menu
        mode="horizontal"
        :default-active="0"
        background-color="#e8e7e3"
        text-color="#777"
        active-text-color="#000"
        @select="selectItem"
      >
        <el-menu-item
          v-for="item in items"
          :index="item.index"
          :key="item.index"
        >
          <div id="text">
            {{ item.title }}
          </div>
        </el-menu-item>
      </el-menu>
    </el-main>
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

  methods: {
    selectItem(index) {
      this.$emit("selected", index);
    },
  },
};
</script>
<style scoped>
#title {
  color: brown;
  font-size: 40px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#text {
  font-size: 20px;
}
</style>
