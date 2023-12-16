// 用来进行全局状态配置
import { createStore } from "vuex";
const store = createStore({
  state() {
    // 全局存储用户名和密码
    return {
      userName: "",
      userPassword: "",
    };
  },
  getters: {
    // 进行是否登录的判断
    isLogin: (state) => {
      return state.userName.length > 0;
    },
  },
  mutations: {
    // 清除缓存的用户信息,登出使用
    clearUserInfo(state) {
      state.userName = "";
      state.userPassword = "";
    },
    // 注册用户信息,登录使用
    registUserInfo(state, { name, password }) {
      state.userName = name;
      state.userPassword = password;
    },
  },
});
export default store;
