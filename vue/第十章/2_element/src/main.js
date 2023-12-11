import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 使用element-plus 这两必须引用
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
let app = createApp(App);
// 遍历ElementPlusIconsVue中的所有组件进行注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 挂载Element-plus
app.use(ElementPlus).mount("#app");
