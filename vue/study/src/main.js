import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import VueAxios from "vue-axios";
import axios from "axios";
import ElementPlus from "element-plus";
// 如果没有引入index.css会导致页面样式错乱
import "element-plus/dist/index.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);
app.use(VueAxios, axios);
app.mount("#app");
