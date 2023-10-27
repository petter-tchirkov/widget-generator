<template>
  <div
    class="editor__result w-[360px] h-[520px] rounded-lg shadow-md p-2"
    :class="getBg"
  >
    <h3
      class="text-center text-2xl font-bold mb-2"
      :class="bg !== 'dark' ? 'text-neutral-900' : 'text-neutral-100'"
    >
      {{ edit.heading }}
    </h3>
    <p
      class="text-center mb-4"
      :class="bg !== 'dark' ? 'text-neutral-900' : 'text-neutral-100'"
    >
      {{ edit.text }}
    </p>
    <editor-feedback-form v-if="props.form === 'feedback'" />
    <editor-review-form v-else-if="props.form === 'review'" />

    <Button
      v-if="props.form !== undefined"
      label="Відправити"
      class="w-full flex justify-center"
      :severity="props.buttonColor === 'green' ? 'success' : 'primary'"
    />

    <footer
      class="text-xs w-full flex justify-center"
      :class="bg !== 'dark' ? 'text-neutral-900' : 'text-neutral-100'"
    >
      Працює на божій помочі
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '~/store/editor'

const edit = useEditorStore()

interface Props {
  form: 'feedback' | 'review' | undefined
  buttonColor: string | undefined
  bg: string | undefined
}

const getBg = computed(() => {
  switch (props.bg) {
    case 'light':
      return 'bg-neutral-100'
    case 'dark':
      return 'bg-neutral-900'
    default:
      return 'bg-neutral-100'
  }
})

const props = defineProps<Props>()
</script>

<style scoped></style>
