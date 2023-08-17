import { createApp, ref } from "vue";
import Loading from '@/components/loading.vue'
import { useGlobalStore } from '@/stores/global'

const useGlobal = useGlobalStore()

const $loading = createApp(Loading, {show: useGlobal.loadState}).mount(document.createElement('div'))

const loadConfig = {
  show() {
    useGlobal.showLoading()
    document.body.appendChild($loading.$el)
  },
  hide() {
    useGlobal.hideLoading()
  }
}

export default loadConfig