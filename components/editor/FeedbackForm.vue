<template>
  <form>
    <Textarea
      v-model="feedback.text"
      class="mb-4 w-full"
      placeholder="Ваша думка"
    />
    <InputText
      v-model="feedback.email"
      class="mb-4 w-full"
      placeholder="Ваш email"
    />
  </form>
</template>

<script setup lang="ts">
const feedback = ref({ text: '', email: '' })
</script>

<style scoped></style>
