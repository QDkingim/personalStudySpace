import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// 导入路由需要的自定义组件
import Demo1 from "./components/DemoOne.vue";
import Demo2 from "./components/DemoTwo.vue";
import User from "./components/UserDemo.vue";
const app = createApp(App);

// 定义路由
const routes = [
  { path: "/demo1", component: Demo1 },
  { path: "/demo2", component: Demo2 },
  { path: "/user/:username/:id", component: User },
];

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

app.use(router);

app.mount("#app");
