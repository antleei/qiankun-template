import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import type { App as AppType } from 'vue'
import {
    renderWithQiankun,
    qiankunWindow,
    QiankunProps
} from "vite-plugin-qiankun/dist/helper"
import './style.css'

let app: AppType;

function render(props: QiankunProps) {
    const { container } = props

    app = createApp(App)
    app.use(router)

    const c = container
        ? container.querySelector("#app")
        : document.getElementById("app")

    app.mount(c)
}

renderWithQiankun({
    // 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
    mount(props: QiankunProps) {
        console.log("[app2] mount");
        render(props);
    },

    // bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子
    bootstrap() {
        console.log("[app2] bootstrap");
    },

    // 应用每次切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
    unmount(props: QiankunProps) {
        console.log("[app2] unmount");
        app.unmount();
    },

    update(props: QiankunProps) {
        console.log("[app2] update");
        console.log(props)
    },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({})
}


