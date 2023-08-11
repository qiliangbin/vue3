import { defineStore } from "pinia";
import { ref } from 'vue';
export const useChat = defineStore('chatStore', () => {
  const chatId = ref<number>()
  const chatItems = ref({})
  const setItems = (items: any) => {
    chatItems.value = items
  }
  return { chatItems, setItems }
})