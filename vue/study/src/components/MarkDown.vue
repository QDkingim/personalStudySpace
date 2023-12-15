<!--
* @description 
* @fileName MarkDown.vue
* @author renxiangsan
* @date 2023/12/15 20:07:00
!-->
<template>
  <p v-html="data"></p>
</template>

<script>
import { marked } from "marked";
export default {
  // 提供外部属性来设置内容
  props: ["content"],
  data() {
    return {};
  },

  components: {},

  computed: {
    // 计算属性,将外部设置的文章MarkDown内容转换成HTML
    data() {
      return marked(this.content);
    },
  },

  created() {},

  //mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped></style>
