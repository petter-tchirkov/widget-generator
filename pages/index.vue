<template>
  <section class="w-full">
    <Header>
      <template #pageTitle> Редагування </template>
    </Header>
    <div class="editor flex gap-4 px-4 w-full h-[calc(100vh-6rem)] mt-4">
      <div class="editor__controls flex flex-col gap-4">
        <Editor />
        <div class="flex flex-col items-center gap-4 p-4 rounded bg-gray-100">
          <Dropdown
            v-model="selectedForm"
            class="w-full"
            :options="forms"
            option-label="name"
            option-value="value"
            placeholder="Яку форму додати?"
          />
          <Dropdown
            v-model="selectedColor"
            class="w-full"
            :options="buttonColors"
            option-label="name"
            option-value="value"
            placeholder="Колір кнопки"
          />
          <Dropdown
            v-model="selectedBg"
            class="w-full"
            :options="bgs"
            option-label="name"
            option-value="value"
            placeholder="Тема"
          />
        </div>
        <div class="flex flex-col bg-gray-100">
          <settings-review-settings v-if="selectedForm === 'review'" />
        </div>
      </div>
      <div class="editor__panel bg-gray-300 grow px-4 flex justify-center items-center">
        <EditorResult
          :form="selectedForm"
          :button-color="selectedColor"
          :bg="selectedBg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
