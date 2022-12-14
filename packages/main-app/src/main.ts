import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { initSentry } from '~/utils/sentry'
import { start as startQiankun } from '~/qiankun'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

// sentry
initSentry(app)

app.use(router)
app.mount('#app')

// 启动qiankun
startQiankun({
  sandbox: {
    experimentalStyleIsolation: true,
  },
})
