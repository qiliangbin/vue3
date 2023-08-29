import { ref } from 'vue'
import { getMyselfApi } from '@/api/login'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const collapse = ref<boolean>(false)
  const loadState = ref<boolean>(false)
  const routerIndex = ref<number>(0)
  const avatarUrl = localStorage.getItem('avatar')
  const whiteRoute = ['/login', '/register', '/retrieve', '/forgetPassword']
  function changeCollapse() {
    collapse.value = !collapse.value
  }
  function showLoading() {
    loadState.value = true
  }
  function hideLoading() {
    loadState.value = false
  }
  function setRouterIndex(index: number) {
    localStorage.setItem('activeIndex', routerIndex.value)
    routerIndex.value = index
  }
  function getRouterIndex() {
    routerIndex.value = localStorage.getItem('activeIndex')
  }
  return { collapse, loadState, whiteRoute, routerIndex, avatarUrl, changeCollapse, showLoading, hideLoading, setRouterIndex, getRouterIndex }
})