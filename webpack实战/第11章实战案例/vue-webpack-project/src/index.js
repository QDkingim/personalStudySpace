import Vue from 'vue'
import App from '../App.vue'


Vue.config.productionTip = false // 关闭生产提示

new Vue({
  render: h => h(App),
}).$mount('#app')