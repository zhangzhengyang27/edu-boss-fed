import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteConfig = {
  path: '/',
  component: Layout,
  meta: {
    title: '广告管理',
    requiresAuth: true
  },
  children: [
    {
      path: '/Advertise',
      name: 'advert',
      component: () => import(/* webpackChunkName: 'advert' */ '@/views/advert/index.vue'),
      meta: {
        title: '广告列表',
        menuId: 'Advertise'
      }
    },
    {
      path: '/AdvertiseSpace',
      name: 'advert-space',
      component: () => import(/* webpackChunkName: 'advertSpace' */ '@/views/advert-space/index.vue'),
      meta: {
        title: '广告位列表',
        menuId: 'AdvertiseSpace'
      }
    }
  ]
}

export default routes
