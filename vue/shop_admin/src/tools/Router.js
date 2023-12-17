// 路由配置
import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Login from "@/components/login/Login.vue";
import Home from "@/components/home/Home.vue";
import store from "./Storage";
import Order from "@/components/order/Order.vue";
import Goods from "@/components/goods/Goods.vue";
import AddGoods from "@/components/goods/AddGoods.vue";
import GoodsCategory from "@/components/goods/GoodsCategory.vue";

// 创建路由实例
const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
      children: [{
          path: "order/:type", //0是普通订单,1是秒杀订单
          component: Order,
          name: "order",
        },
        {
          path: "goods/:type", //0是普通商品,1是秒杀商品,2是今日推荐
          component: Goods,
          name: "goods",
        },
        {
          path: "addGoods/:type", //0是普通商品,1是秒杀商品,2是今日推荐
          component: AddGoods,
          name: "addGoods",
        },
        {
          path: "category",
          component: GoodsCategory,
          name: "goodsCategory",
        },
      ],
      redirect: "/home/order/0",
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
    return {
      name: "login"
    };
  }
});

export default Router;