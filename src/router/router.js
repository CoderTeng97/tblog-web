import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  // mode: 'history', //用于浏览器不显示#
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/Login.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index/Index.vue')
    },
    {
      path: '/release',
      name: 'release',
      component: () => import('@/pages/Release.vue')
    }
    // {
    //   path: '/editor/upload',
    //   name: 'release',
    //   component: () => import('./pages/Release.vue')
    // }
  ],
   // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动
   scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
