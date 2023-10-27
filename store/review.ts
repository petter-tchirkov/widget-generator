import { defineStore } from 'pinia'

interface smileReview {
  value: number
  icon: string
}

export const useReviewStore = defineStore('review', () => {
  const smileAnswers: Ref<smileReview[]> = ref([
    { value: 1, icon: 'ph:smiley-angry' },
    { value: 2, icon: 'ph:smiley-sad' },
    { value: 3, icon: 'ph:smiley-meh' },
    { value: 4, icon: 'ph:smiley' },
    { value: 5, icon: 'ph:smiley-x-eyes' }
  ])

  const answerTypes = ref([
    { name: 'Смайли', value: 'smiles' },
    { name: 'Від 1 до 10', value: 'numbers' },
    { name: 'Зірочки', value: 'stars' }
  ])
  const answerType = ref('smile')

  const starsValue = ref()

  return { smileAnswers, answerTypes, answerType, starsValue }
})
