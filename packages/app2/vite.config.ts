import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankunPlugin from 'vite-plugin-qiankun'
import packageConfig from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    qiankunPlugin(`${packageConfig.name}`, { useDevMode: true }),
  ],
  server: {
    port: 9002,
    cors: true,
  }
})
