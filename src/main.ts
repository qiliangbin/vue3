import './assets/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'

const render = (container?:any) => {
  const app = createApp(App)
  app.use(ElementPlus)
  app.use(createPinia())
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

const initQiankun = () => {
  const app = createApp(App)
  renderWithQiankun({
    mount(props:any) {
      const {container} = props
      render(container)
    },
    bootstrap() {},
    unmount() {
      app.unmount()
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQiankun() : render()
