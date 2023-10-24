import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const fullText = ref(
    `<h1>Заголовок</h1>
    <p>Оцініть що ви думаєте про наш сервіс</p>`
  )

  const heading = computed(() => {
    return fullText.value.split('</h1>')[0].slice(4, 99)
  })

  const text = computed(() => {
    return fullText.value
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
    fullText,
    form
  }
})
