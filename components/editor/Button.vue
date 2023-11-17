<template>
  <button
    class="result__btn"
    :class="result.selectedButtonColor"
  >
    {{ result.selectedButtonLabel }}
  </button>
</template>

<script setup lang="ts">
import { useResultStore } from '~/store/result'
const result = useResultStore()
</script>

<style scoped>
.result__btn {
  width: 100%;
  padding: 10px 16px;
  border-radius: 4px;
  color: #fff;
}
.blue {
  background: #1296e7;
}
.green {
  background: #689f38;
}
.orange {
  background: #f59e0a;
}
.red {
  background: #ef4444;
}
.purple {
  background: #a855f7;
}
</style>
