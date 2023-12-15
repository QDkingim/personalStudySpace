<!--
* @description 
* @fileName AppHome.vue
* @author renxiangsan
* @date 2023/12/13 07:53:25
!-->
<template>
  <el-container id="container">
    <el-header style="width: 100%; height: 120px">
      <Header :items="navItems" @selected="changeSelected"></Header>
    </el-header>
    <el-main>
      <Body
        :items="bodyItems"
        :topic="navItems[currentTopicIndex].title"
      ></Body>
    </el-main>
    <el-footer>
      <div id="footer">{{ desc }}</div>
    </el-footer>
  </el-container>
</template>

<script>
import Body from "./AppBody.vue";
import Header from "./AppHeader.vue";
import FM from "../tools/FileManager";
export default {
  data() {
    return {
      // map返回一个新数组,数组里的每一项都是return后面的返回值
      navItems: FM.getAllTopic().map((item, ind) => {
        return {
          index: ind,
          title: item,
        };
      }),
      desc: "版权所有, 仅限学习使用, 禁止传播!",
      // 当前展示的专题
      currentTopicIndex: 0,
    };
  },

  components: {
    Body,
    Header,
  },

  computed: {
    // 此计算属性用来获取当前专题下所有的文章列表
    bodyItems() {
      return FM.getPosts(this.currentTopicIndex).map((item, index) => {
        return {
          index: String(index),
          title: item,
        };
      });
    },
  },

  created() {},

  mounted() {
    // 组件挂载时,使用FileManager来获取当前所要展示的文章内容
    FM.getPostContent("HTML专题", "文本标签").then((res) => {
      console.log(res);
    });
  },

  methods: {
    // 专题切换时调用的方法
    changeSelected(index) {
      this.currentTopicIndex = Number(index);
    },
  },
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
