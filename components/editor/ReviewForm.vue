<template>
  <form class="result__form form">
    <review-smiles v-if="reviewStore.answerType === 'smiles'" />
    <review-marks v-else-if="reviewStore.answerType === 'marks'" />
    <textarea
      class="form__textarea"
      placeholder="Ваша думка"
      rows="5"
    />
    <input
      type="email"
      class="form__email"
      placeholder="Ваш email"
    />
  </form>
</template>

<script setup lang="ts">
import { useReviewStore } from '~/store/review'

const reviewStore = useReviewStore()
</script>

<style scoped>
.form {
  width: 100%;
}
input::placeholder {
  font-size: 14px;
}
.form__textarea,
.form__email {
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.47);
  margin-bottom: 10px;
  padding: 8px 8px;
}
</style>
