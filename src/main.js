import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import toast from './components/common/toast/index';
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// vue实例可以作为事件总线
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/ch.jpg')
})

// 解决移动端点击300ms延迟的问题
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



