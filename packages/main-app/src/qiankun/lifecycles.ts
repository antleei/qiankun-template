export const lifecycles = {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app: any) => {
    // 加载微应用前，加载进度条
    console.log('before load app.name====>>>>>', app.name)
    return Promise.resolve(app)
  },
  beforeMount: (app: any) => {
    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    return Promise.resolve(app)
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app: any) => {
    // 加载微应用前，进度条加载完成
    console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    return Promise.resolve(app)
  },
}
