import { defineStore } from 'pinia'

interface buttonColor {
  name: string
  value: string
  color: string
}

export const useResultStore = defineStore('result', () => {
  const forms = ref([
    { name: 'Скинути', value: '' },
    { name: "Форма зворотнього зв'язку", value: 'feedback' },
    { name: 'Форма оцінка', value: 'review' },
    { name: 'Заклик до підписки', value: 'cta' }
  ])
  const selectedForm: Ref<string | undefined> = ref()

  const buttonColors: buttonColor[] = [
    {
      name: 'Синя',
      value: 'blue',
      color: '#1296E7'
    },
    {
      name: 'Зелена',
      value: 'green',
      color: '#689F38'
    },
    {
      name: 'Помаранчева',
      value: 'orange',
      color: '#F59E0A'
    },
    {
      name: 'Червона',
      value: 'red',
      color: '#EF4444'
    },
    {
      name: 'Фіолетова',
      value: 'purple',
      color: '#A855F7'
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
