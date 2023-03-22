import { ToastColorThemeEnum } from '@/helpers/color'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const showToast = ref<boolean>(false)
  const toastMessage = ref<string>('')
  const toastColor = ref<ToastColorThemeEnum>(ToastColorThemeEnum.INFO)

  function openToast(message: string, theme: ToastColorThemeEnum) {
    showToast.value = true
    toastMessage.value = message
    toastColor.value = theme

    setTimeout(() => closeToast(), 5000)
  }

  function closeToast() {
    showToast.value = false
    toastMessage.value = ''
  }

  return { showToast, toastMessage, toastColor, openToast, closeToast }
})
