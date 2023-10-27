<template>
  <form>
    <div
      v-if="reviewStore.answerType === 'smiles'"
      class="flex gap-3 justify-around mb-4"
    >
      <div
        v-for="mark in reviewStore.smileAnswers"
        :key="mark.value"
      >
        <Icon
          :name="mark.icon"
          class="w-12 h-12"
        />
      </div>
    </div>
    <div
      v-else-if="reviewStore.answerType === 'numbers'"
      class="grid grid-cols-5 gap-2 mb-4"
    >
      <div
        v-for="n in 10"
        :key="n"
        class="w-10 h-10 rounded-full border-2 font-bold border-black flex justify-center items-center justify-self-center"
      >
        {{ n }}
      </div>
    </div>

    <div
      v-else-if="reviewStore.answerType === 'stars'"
      class="flex justify-around"
    >
      <Rating
        v-model="reviewStore.starsValue"
        :cancel="false"
      >
        <template #onicon>
          <Icon
            name="ph:star-light"
            class="w-10 h-10"
          />
        </template>
      </Rating>
    </div>

    <Textarea
      v-model="review.text"
      class="w-full mb-4"
      placeholder="Коментар"
    />
    <InputText
      v-model="review.email"
      class="w-full mb-4"
      placeholder="Ваш email"
    />
  </form>
</template>

<script setup lang="ts">
import { useReviewStore } from '~/store/review'

const reviewStore = useReviewStore()
const review = ref({ text: '', email: '' })
</script>

<style scoped></style>
