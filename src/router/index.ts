import { createRouter, createWebHistory } from 'vue-router'
import {qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app/app-vue3' : import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import('../views/home/components/index.vue')
        },
        {
          path: '/test',
          name: 'Test',
          component: () => import('../views/home/components/test.vue')
        }
      ]
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History/index.vue')
    }
  ]
})

export default router
