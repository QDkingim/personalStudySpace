import { createApp } from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";

// 挂载根组件
const app = createApp(App);
// 注册axios
app.use(VueAxios, axios);
app.mount("#app");
