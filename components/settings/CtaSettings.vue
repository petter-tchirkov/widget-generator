<template>
  <div class="p-4 rounded">
    <h3 class="mb-4">Провайдер</h3>
    <Dropdown
      v-model="result.selectedCta"
      :options="result.ctaArray"
      placeholder="Куди"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { useResultStore } from '~/store/result'
const result = useResultStore()
</script>

<style scoped></style>
