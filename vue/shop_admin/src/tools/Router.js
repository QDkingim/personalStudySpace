// 路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/components/login/Login.vue";
import Home from "@/components/home/Home.vue";
import store from "./Storage";

// 创建路由实例
const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
  ],
});

// 路由守卫,当未登录时,非登录页面的任何页面都不允许跳转
Router.beforeEach((from) => {
  let isLogin = store.getters.isLogin;
  if (isLogin || from.name == "login") {
    return true;
  } else {
    // 当发现未登录时,重定向到login页面
    return { name: "login" };
  }
});

export default Router;
