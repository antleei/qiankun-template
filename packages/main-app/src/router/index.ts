import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/layouts/index.vue'
import { apps } from '~/qiankun/micro-apps'

const microAppRoutes = apps.map(app => ({
  path: `${app.activeRule}/:morePath*`,
  component: Layout,
}))

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('~/pages/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('~/pages/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...microAppRoutes,
    ...routes,
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    else return { top: 0 }
  },
})

export default router
