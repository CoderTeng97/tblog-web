import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import ElementUI from 'element-ui'
import VueCookies from 'vue-cookies'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './config/element-config'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router: VueRouter,
  render: h => h(App)
}).$mount('#app')
