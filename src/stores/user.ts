import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const nickName = ref<string>('')
  const selfInfo = ref<any>()
  function setToken(val: string) {
    token.value = val
    localStorage.setItem('token', token.value)
  }
  function setNickName(name: string) {
    nickName.value = name
    localStorage.setItem('nickName', nickName.value)
  }
  function getInfo() {
    selfInfo.value = localStorage.getItem('selfInfo') === '' ? {} : JSON.parse(localStorage.getItem('selfInfo'))
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
    selfInfo,
    setToken,
    getToken,
    clearToken,
    setNickName,
    getInfo
  }
})