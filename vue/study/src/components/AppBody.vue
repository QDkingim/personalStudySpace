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
        @select="selectItem"
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
    <el-main>
      <MarkDown :content="content"></MarkDown>
    </el-main>
  </el-container>
</template>

<script>
import MarkDown from "./MarkDown.vue";
import FileManager from "@/tools/FileManager";
export default {
  data() {
    return {
      // 侧边栏当前选中的文章
      currentIndex: 0,
      // 文档的Markdown内容
      content: "",
    };
  },
  // topic是当前选中的专题名称
  props: ["items", "topic"],
  components: { MarkDown },

  computed: {},

  created() {},

  mounted() {
    // 组件挂载的时候,加载默认的首篇文章
    FileManager.getPostContent(
      this.topic,
      this.items[this.currentIndex].title
    ).then((res) => {
      this.content = res.data;
    });
  },

  methods: {
    selectItem(index) {
      this.currentIndex = Number(index);
    },
  },
  watch: {
    // 监听选中文章的变化
    currentIndex: function (val) {
      FileManager.getPostContent(this.topic, this.items[val].title).then(
        (res) => {
          this.content = res.data;
        }
      );
    },
    // 监听选中的专题变化
    topic: function (val) {
      FileManager.getPostContent(val, this.items[this.currentIndex].title).then(
        (res) => {
          this.content = res.data;
        }
      );
    },
  },
};
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #fff !important;
}
</style>
