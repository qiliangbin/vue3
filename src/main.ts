import './assets/main.less'
import './tailwind.css'
import "amfe-flexible/index.js";
import 'animate.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'

const pinia = createPinia()

const render = (container?:any) => {
  const app = createApp(App)
  app.use(ElementPlus)
  app.use(router)
  app.use(pinia)
  app.mount(container ? container.querySelector('#app') : '#app')
}
render()
// const initQiankun = () => {
//   const app = createApp(App)
//   renderWithQiankun({
//     mount(props:any) {
//       const {container} = props
//       render(container)
//     },
//     bootstrap() {},
//     unmount() {
//       app.unmount()
//     }
//   })
// }

// qiankunWindow.__POWERED_BY_QIANKUN__ ? initQiankun() : render()
