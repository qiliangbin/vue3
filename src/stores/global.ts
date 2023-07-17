import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const collapse = ref<boolean>(true)
  function changeCollapse() {
    collapse.value = !collapse.value
  }
  return { collapse, changeCollapse }
})