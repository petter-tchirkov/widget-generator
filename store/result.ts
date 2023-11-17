import { defineStore } from 'pinia'

interface buttonColor {
  name: string
  value: string
}

export const useResultStore = defineStore('result', () => {
  const forms = ref([
    { name: "Форма зворотнього зв'язку", value: 'feedback' },
    { name: 'Форма оцінка', value: 'review' },
    { name: 'Заклик до підписки', value: 'cta' }
  ])
  const selectedForm: Ref<string | undefined> = ref()

  const buttonColors: buttonColor[] = [
    {
      name: 'Синя',
      value: 'blue'
    },
    {
      name: 'Зелена',
      value: 'green'
    },
    {
      name: 'Помаранчева',
      value: 'orange'
    },
    {
      name: 'Червона',
      value: 'red'
    },
    {
      name: 'Фіолетова',
      value: 'purple'
    }
  ]
  const selectedButtonColor: Ref<string | undefined> = ref('blue')
  const selectedButtonLabel: Ref<string | undefined> = ref('Відправити')

  const ctaArray = ['viber', 'telegram']
  const selectedCta = ref('telegram')

  return {
    forms,
    selectedForm,
    buttonColors,
    selectedButtonColor,
    selectedButtonLabel,
    ctaArray,
    selectedCta
  }
})
