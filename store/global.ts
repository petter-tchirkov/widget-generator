import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const isSidebarOpen = ref(false)

  return {
    isSidebarOpen
  }
})
