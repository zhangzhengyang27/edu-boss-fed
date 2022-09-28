import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './modules'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  // to.matched 是一个数组（匹配到是路由记录）
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      // 跳转到登录页面
      return next({
        name: 'login',
        query: { // 通过 url 传递查询字符串参数
          redirect: to.fullPath // 把登录成功需要返回的页面告诉登录页面
        }
      })
    }
    // 用户登陆了，获取权限列表，生成权限路由
    // 动态的把权限路由添加到路由表中
    // router.addRoute()
    // 这里不采取这个方法

    // const { menuList } = await store.dispatch('getUserPermissons')
    // 获取用户权限
    const { menuList } = await store.dispatch('getUserPermissons')
    for (let i = 0; i < menuList.length; i++) {
      const menu = menuList[i]
      //  有权限，允许通过
      if (menu.href === to.meta!.menuId) {
        return next()
      }
      if (menu.subMenuList) {
        for (let j = 0; j < menu.subMenuList.length; j++) {
          const subMenu = menu.subMenuList[j]
          //  有权限，允许通过
          if (subMenu.href === to.meta!.menuId) {
            return next()
          }
        }
      }
    }

    // 代码执行到这里就是没有权限的
    return next('/not-permission')
  }
  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
