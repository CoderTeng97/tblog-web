import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll' //无限加载
import 'swiper/dist/css/swiper.css'
import './config/element-config'
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(infiniteScroll)


new Vue({
  router: VueRouter,
  render: h => h(App)
}).$mount('#app')
