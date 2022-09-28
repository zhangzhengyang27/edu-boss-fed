import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteConfig = {
  path: '/Courses',
  component: Layout,
  meta: {
    title: '课程管理',
    requiresAuth: true,
    menuId: 'Courses'
  },
  children: [
    {
      path: '',
      name: 'course',
      component: () => import(/* webpackChunkName: 'course' */ '@/views/course/index.vue'),
      meta: {
        menuId: 'Courses'
      }
    },
    {
      path: 'create',
      name: 'course-create',
      component: () => import(/* webpackChunkName: 'course-create' */ '@/views/course/create.vue'),
      meta: {
        title: '创建课程',
        menuId: 'CourseItem'
      }
    },
    {
      path: ':courseId/edit',
      name: 'course-edit',
      component: () => import(/* webpackChunkName: 'course-edit' */ '@/views/course/edit.vue'),
      props: true,
      meta: {
        title: '更新课程',
        menuId: 'CourseItem'
      }
    },
    {
      path: ':courseId/section',
      name: 'course-section',
      component: () => import(/* webpackChunkName: 'course-section' */ '@/views/course/section.vue'),
      props: true,
      meta: {
        title: '课程内容',
        menuId: 'CourseSections'
      }
    },
    {
      path: ':courseId/video',
      name: 'course-video',
      component: () => import(/* webpackChunkName: 'course-video' */ '@/views/course/video.vue'),
      props: true,
      meta: {
        title: '视频上传',
        menuId: 'VideoOptions'
      }
    }
  ]
}

export default routes
