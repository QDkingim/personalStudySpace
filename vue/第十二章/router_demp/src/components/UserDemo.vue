<!--
* @description 
* @fileName UserDemo.vue
* @author renxiangsan
* @date 2023/12/12 20:28:30
!-->
<template>
  <h1>姓名:{{ $route.params.username }}</h1>
  <h2>id:{{ $route.params.id }}</h2>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},

  //mounted() {},

  methods: {},
};
</script>
<style lang="sass" scoped></style>
