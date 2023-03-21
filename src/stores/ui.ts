import { HexLightColorEnum } from '@/helpers/color'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const showToast = ref<boolean>(false)
  const toastMessage = ref<string>('')
  const toastColor = ref<HexLightColorEnum>(HexLightColorEnum.BLUE)

  function openToast(message: string, theme: HexLightColorEnum) {
    showToast.value = true
    toastMessage.value = message
    toastColor.value = theme
  }

  function closeToast() {
    showToast.value = false
    toastMessage.value = ''
  }

  return { showToast, toastMessage, toastColor, openToast, closeToast }
})
