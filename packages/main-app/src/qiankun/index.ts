import { registerMicroApps, start } from 'qiankun'
import { apps } from './micro-apps'
import { lifecycles } from '~/qiankun/lifecycles'

registerMicroApps(apps, lifecycles)

// 导出 qiankun 的启动函数
export { start }
