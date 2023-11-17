<template>
  <div
    class="result w-[360px] rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
  >
    <div
      class="result__text"
      v-html="edit.editorContent"
    />
    <editor-feedback-form v-if="result.selectedForm === 'feedback'" />
    <editor-review-form v-else-if="result.selectedForm === 'review'" />
    <editor-cta-button
      v-else-if="result.selectedForm === 'cta'"
      provider="viber"
    />

    <editor-button
      v-if="result.selectedForm !== undefined && result.selectedForm !== 'cta'"
      label="Відправити"
    />
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '~/store/editor'
import { useResultStore } from '~/store/result'

const result = useResultStore()
const edit = useEditorStore()
</script>

<style lang="scss">
.editor-result {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result__text h1 {
  font-weight: bold;
  font-size: 36px;
  text-align: center;
}

.result__text p {
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
