import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    qiankun('vue3', {
      useDevMode: true
    })
  ],
  server: {
    hmr: true, // 热更新
    port: 7777,
    headers: {
      "Access-Control-Allow-Origin": '*'
    },
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/myapi': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/myapi/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
