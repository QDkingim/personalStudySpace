import { createApp } from "vue";
import App from "./App.vue";
import Router from "./tools/Router";
import store from "./tools/Storage";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(Router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
