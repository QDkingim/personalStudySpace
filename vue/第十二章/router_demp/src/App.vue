<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <p>
    <!-- router-link 是路由跳转组件,用to来指定要跳转的路由 -->
    <router-link to="/demo1">页面1</router-link>
    <br />
    <router-link to="/demo2">页面2</router-link>
  </p>
  <!-- router-view 是路由的页面出口,路由匹配到的组件会渲染在此 -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
