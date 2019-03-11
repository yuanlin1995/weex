import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/index.vue'),
      redirect: '/xuenai',
      children: [
        {
          path: '/xuenai',
          component: require('@/components/xuenai.vue')
        },
        {
          path: '/yise',
          component: require('@/components/yise.vue')
        },
        {
          path: '/tuanzi',
          component: require('@/components/tuanzi.vue')
        },
        {
          path: '/chidanta',
          component: require('@/components/chidanta.vue')
        }
      ]
    },
    {
      path: '/detail',
      component: require('@/components/detail.vue')
    }
  ]
})
