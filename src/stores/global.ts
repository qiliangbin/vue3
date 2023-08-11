import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const collapse = ref<boolean>(false)
  const showLoading = ref<boolean>(false)
  function changeCollapse() {
    collapse.value = !collapse.value
  }
  function changeLoading(type: string) {
    type === 'start' ? showLoading.value = true : showLoading.value = false
  }
  return { collapse, showLoading, changeCollapse, changeLoading }
})