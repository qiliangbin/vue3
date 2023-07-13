import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          math: "always", // 括号内才使用数学计算
          globalVars: {
            // 全局变量
            mainColor: "red",
          },
        },
      },
    }
  })
)
