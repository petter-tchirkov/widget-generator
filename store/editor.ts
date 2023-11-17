import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const editorContent = ref('<h1>Ваш заголовок</h1><p>Ваша думка</p>')

  const heading = computed(() => {
    return editorContent.value.split('</h1>')[0].slice(4, 99)
  })

  const text = computed(() => {
    return editorContent.value
      .split('</h1>')[1]
      .trim()
      .replace(/<\/?[^>]+(>|$)/g, '')
  })

  const form = ref({
    text: '',
    email: ''
  })

  return {
    heading,
    text,
    form,
    editorContent
  }
})
