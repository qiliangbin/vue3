import { createRouter, createWebHistory } from 'vue-router'
import {qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import { ElMessage } from "element-plus";
const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app/app-vue3' : import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404/index.vue'),
      alias: "/:pathMatch(.*)*"
    },
    {
      path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
      redirect: "/404",
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/login/register.vue')
    },
    {
      path: '/',
      name: 'Home',
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
      path: '/chat',
      name: 'Chat',
      component: () => import('../views/chat/index.vue')
    },
    {
      path: '/map',
      name: 'Map',
      component: () => import('../views/map/index.vue')
    },
    {
      path: '/self',
      name: 'Self',
      component: () => import('../views/self/index.vue')
    }
  ]
})

const whiteRoute = ['/login', '/register', '/retrieve']
router.beforeEach((to, from, next) => {
  if(whiteRoute.includes(to.path)) {
    next()
  } else {
    const token = localStorage.getItem('token')
    if(!token) {
      ElMessage.error('没有登录信息，请重新登录')
      next('/login')
    } else {
      next()
    }
  }
})

export default router
