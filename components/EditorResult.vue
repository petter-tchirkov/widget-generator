<template>
  <div
    class="editor__result w-[360px] h-[520px] rounded-lg shadow-md p-2"
    :class="getBg">
    <h3
      class="text-center text-2xl font-bold mb-2"
      :class="bg === 'light' ? 'text-neutral-900' : 'text-neutral-100'">
      {{ edit.heading }}
    </h3>
    <p
      class="text-center mb-4"
      :class="bg === 'light' ? 'text-neutral-900' : 'text-neutral-100'">
      {{ edit.text }}
    </p>

    <form v-if="props.isForm">
      <UTextarea
        class="mb-4"
        v-model="edit.form.text"
        placeholder="Ваша думка" />
      <UInput
        class="mb-4"
        v-model="edit.form.email"
        placeholder="Ваш email" />
      <UButton
        label="Відправити"
        :color="buttonColor"
        class="w-full flex justify-center" />
    </form>

    <footer
      class="text-xs w-full flex justify-center"
      :class="bg === 'light' ? 'text-neutral-900' : 'text-neutral-100'">
      Працює на божій помочі
    </footer>
  </div>
</template>

<script setup lang="ts">
import Link from '@nuxt/ui/dist/runtime/components/elements/Link.vue'
import { useEditorStore } from '~/store/editor'

const edit = useEditorStore()

interface Props {
  isForm: boolean
  buttonColor: string
  bg: string
}

const getBg = computed(() => {
  switch (props.bg) {
    case 'light':
      return 'bg-neutral-100'
    case 'dark':
      return 'bg-neutral-900'
  }
})

const props = defineProps<Props>()
</script>

<style scoped></style>
