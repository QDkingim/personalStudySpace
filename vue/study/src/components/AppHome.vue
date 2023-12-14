<!--
* @description 
* @fileName AppHome.vue
* @author renxiangsan
* @date 2023/12/13 07:53:25
!-->
<template>
  <el-container id="container">
    <el-header style="width: 100%; height: 120px">
      <Header :items="navItems"></Header>
    </el-header>
    <el-main>
      <Body :items="bodyItems"></Body>
    </el-main>
    <el-footer>
      <div id="footer">{{ desc }}</div>
    </el-footer>
  </el-container>
</template>

<script>
import Body from "./AppBody.vue";
import Header from "./AppHeader.vue";
export default {
  data() {
    return {
      navItems: [
        {
          index: 0,
          title: "HTML专题",
        },
        {
          index: 1,
          title: "CSS专题",
        },
      ],
      bodyItems: [
        {
          index: 0,
          title: "HTML简介",
        },
        {
          index: 1,
          title: "HTML编辑器",
        },
      ],
      desc: "版权所有, 仅限学习使用, 禁止传播!",
    };
  },

  components: {
    Body,
    Header,
  },

  computed: {},

  created() {},

  //mounted() {},

  methods: {},
};
</script>
<style scoped>
#container {
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
  height: 800px;
}

#footer {
  text-align: center;
  background-color: bisque;
  height: 40px;
  line-height: 40px;
  color: #717171;
}
</style>
