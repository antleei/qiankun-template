export interface AppLifecycle {
  beforeLoad?: (appWindow: Window) => Promise<any> | any
  beforeMount?: (appWindow: Window) => Promise<any> | any
  afterMount?: (appWindow: Window) => Promise<any> | any
  beforeUnmount?: (appWindow: Window) => Promise<any> | any
  afterUnmount?: (appWindow: Window) => Promise<any> | any
  activated?: (appWindow: Window) => Promise<any> | any
  deactivated?: (appWindow: Window) => Promise<any> | any
  loadError?: (url: string, e: Error) => Promise<any> | any
}

export const lifecycles: AppLifecycle = {
  beforeLoad: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} beforeLoad`),
  beforeMount: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} beforeMount`),
  afterMount: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} afterMount`),
  beforeUnmount: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} beforeUnmount`),
  afterUnmount: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} afterUnmount`),
  activated: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} activated`),
  deactivated: appWindow => console.log(`[LifeCircle] ${appWindow.__WUJIE.id} deactivated`),
  loadError: (url, e) => console.log(`${url} 加载失败`, e),
}
