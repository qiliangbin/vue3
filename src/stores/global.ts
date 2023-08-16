import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const collapse = ref<boolean>(false)
  const showLoading = ref<boolean>(false)
  const routerIndex = ref<number>(0)
  const whiteRoute = ['/login', '/register', '/retrieve', '/forgetPassword']
  function changeCollapse() {
    collapse.value = !collapse.value
  }
  function changeLoading(type: string) {
    type === 'start' ? showLoading.value = true : showLoading.value = false
  }
  function setRouterIndex(index: number) {
    routerIndex.value = index
  }
  return { collapse, showLoading, whiteRoute, routerIndex, changeCollapse, changeLoading, setRouterIndex }
})