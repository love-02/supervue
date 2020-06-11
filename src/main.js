import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import toast from './components/common逻辑/toast'
Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast)
/* eslint-disable no-new */
//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyload,{
  // loading:require()
})

new Vue({
  el: '#app',
  router,
  store,
  toast,
  render: h => h(App)
})
