<template>
  <section class="w-full h-full">
    <Header>
      <template #pageTitle>Редагування</template>
    </Header>
    <div class="editor flex gap-4 w-full h-[calc(100%-80px)]">
      <div class="bg-white rounded-xl shadow-md p-4 overflow-auto">
        <div class="editor__controls flex flex-col gap-4">
          <Editor />
          <div
            class="flex flex-col items-center gap-4 p-4 rounded-xl shadow-md bg-gray-100"
          >
            <Dropdown
              v-model="selectedForm"
              class="w-full"
              :options="forms"
              option-label="name"
              option-value="value"
              placeholder="Яку форму додати?"
              @change="codeShown = false"
            />
            <Dropdown
              v-model="selectedColor"
              class="w-full"
              :options="buttonColors"
              option-label="name"
              option-value="value"
              placeholder="Колір кнопки"
              @change="codeShown = false"
            />
            <Dropdown
              v-model="selectedBg"
              class="w-full"
              :options="bgs"
              option-label="name"
              option-value="value"
              placeholder="Тема"
              @change="codeShown = false"
            />
          </div>
          <div class="flex flex-col bg-gray-100 rounded-xl shadow-md">
            <settings-review-settings v-if="selectedForm === 'review'" />
          </div>
          <Button
            :disabled="!selectedForm"
            :label="codeShown ? 'Показати результат' : 'Показати код'"
            @click="codeShown = !codeShown"
          />
        </div>
      </div>
      <div
        class="editor__panel bg-blue-300 grow px-4 flex justify-center items-center rounded-xl shadow-md"
      >
        <CodeShown
          v-if="codeShown"
          :heading="useEditorStore().heading"
          :button-color="selectedColor"
          :form="selectedForm"
        />
        <EditorResult
          v-else
          :form="selectedForm"
          :button-color="selectedColor"
          :bg="selectedBg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEditorStore } from '~/store/editor'
interface buttonColor {
  name: string
  value: string
}

const forms = [
  { name: "Форма зворотнього зв'язку", value: 'feedback' },
  { name: 'Форма оцінка', value: 'review' }
]
const selectedForm: Ref<string | undefined> = ref()

const buttonColors: buttonColor[] = [
  {
    name: 'Синя',
    value: 'blue'
  },
  {
    name: 'Зелена',
    value: 'green'
  }
]
const selectedColor: Ref<string | undefined> = ref()

const bgs = [
  {
    name: 'Світлий',
    value: 'light'
  },
  {
    name: 'Темний',
    value: 'dark'
  }
]
const selectedBg: Ref<string | undefined> = ref()

const codeShown = ref(false)
</script>

<style scoped></style>
