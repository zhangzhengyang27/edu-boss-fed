import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteConfig = {
  path: '/',
  component: Layout,
  meta: {
    title: '用户管理',
    requiresAuth: true
  },
  children: [
    {
      path: '/Users',
      name: 'user',
      component: () => import(/* webpackChunkName: 'user' */ '@/views/user/index.vue'),
      meta: {
        menuId: 'Users'
      }
    }
  ]
}

export default routes
