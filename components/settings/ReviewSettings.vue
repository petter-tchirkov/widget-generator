<template>
  <div class="p-4 rounded">
    <h3>Налаштування опитування</h3>
    <Dropdown
      v-model="reviewStore.answerType"
      :options="reviewStore.answerTypes"
      option-value="value"
      option-label="name"
      placeholder="Вид оцінювання"
    />
  </div>
</template>

<script setup lang="ts">
import { useReviewStore } from '~/store/review'
const reviewStore = useReviewStore()
</script>

<style scoped></style>
