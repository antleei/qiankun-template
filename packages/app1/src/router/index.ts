import { Router, createRouter, createWebHistory } from "vue-router"
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper"
import packageConfig from "../../package.json"

console.log('是否为乾坤环境：', qiankunWindow.__POWERED_BY_QIANKUN__)

export const routes = [
    {
        path: "/",
        component: () => import("~/views/home/index.vue"),
    }
]

// 创建路由实例
const router: Router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? `/${packageConfig.name}` : "/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            if (savedPosition) {
                return savedPosition
            }
        })
    }
})

export default router
