<template>
  <button
    class="result__cta"
    :class="result.selectedCta"
  >
    <provider-icon :provider="result.selectedCta" />
    <span>Написати в {{ result.selectedCta }}</span>
  </button>
</template>

<script setup lang="ts">
import { useResultStore } from '~/store/result'
const result = useResultStore()
</script>

<style scoped>
.result__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: none;
  padding: 11.42px 16px;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  text-transform: capitalize;
}

.telegram {
  background: #1396e7;
}
.viber {
  background: #9179ee;
}
</style>
