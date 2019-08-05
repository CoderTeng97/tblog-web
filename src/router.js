import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login/Login.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('./pages/Index/Index.vue')
    },
    {
      path: '/release',
      name: 'release',
      component: () => import('./pages/Release.vue')
    },
    // {
    //   path: '/editor/upload',
    //   name: 'release',
    //   component: () => import('./pages/Release.vue')
    // }
  ]
})
