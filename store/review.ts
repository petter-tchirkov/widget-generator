import { defineStore } from 'pinia'

export const useReviewStore = defineStore('review', () => {
  const answerTypes = ref([
    { name: 'Смайли', value: 'smiles' },
    { name: 'Від 1 до 10', value: 'marks' }
  ])
  const answerType = ref('smiles')
  const starsValue = ref()

  return { answerTypes, answerType, starsValue }
})
