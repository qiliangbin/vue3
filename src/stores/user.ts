import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')

  function setToken(val: string) {
    token.value = val
    localStorage.setItem('token', token.value)
  }

  function getToken() {
    const loaclToken = localStorage.getItem('token')
    if(loaclToken) {
      token.value = loaclToken
    }
  }

  function clearToken() {
    localStorage.removeItem('token')
  }
  return {
    token,
    setToken,
    getToken,
    clearToken,
  }
})