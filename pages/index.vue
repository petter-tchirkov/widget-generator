<template>
  <section class="w-full">
    <Header>
      <template #pageTitle> Редагування </template>
    </Header>
    <div class="editor flex gap-4 px-4 w-full h-[calc(100vh-6rem)] mt-4">
      <div class="editor__controls flex flex-col gap-4">
        <Editor />
        <UCheckbox
          v-model="isForm"
          label="Додати форму" />
        <div class="flex gap-4">
          <USelectMenu
            v-model="selectedColor"
            :options="buttonColors"
            option-attribute="label"
            value-attribute="slot">
            <template #label>
              <div class="flex items-center gap-4">
                <div
                  class="w-8 h-8"
                  :class="`bg-${currentSelectedColor?.slot}-600 rounded`"></div>
                <span> {{ currentSelectedColor?.label }}</span>
              </div>
            </template>
          </USelectMenu>
          <USelectMenu
            v-model="selectedBg"
            :options="bgs"
            option-attribute="label"
            value-attribute="value">
            <template #label>
              <div class="flex items-center gap-4">
                <div
                  class="w-8 h-8"
                  :class="`bg-red-${currentSelectedBg?.value} rounded border`"></div>
                <span> {{ currentSelectedBg?.label }}</span>
              </div>
            </template>
          </USelectMenu>
        </div>
      </div>
      <div class="editor__panel bg-gray-300 grow px-4 flex justify-center items-center">
        <EditorResult
          :is-form="isForm"
          :button-color="currentSelectedColor?.slot"
          :bg="currentSelectedBg?.value" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isForm = ref(false)

interface buttonColor {
  label: string
  slot: string
}

const buttonColors: buttonColor[] = [
  {
    label: 'Blue',
    slot: 'blue'
  },
  {
    label: 'Green',
    slot: 'green'
  }
]

const selectedColor = ref(buttonColors[0].slot)
const currentSelectedColor = computed(() =>
  buttonColors.find(color => color.slot === selectedColor.value)
)

const bgs = [
  {
    label: 'Світлий',
    value: 'light'
  },
  {
    label: 'Темний',
    value: 'dark'
  }
]

const selectedBg = ref(bgs[0].value)
const currentSelectedBg = computed(() => bgs.find(bg => bg.value === selectedBg.value))
</script>

<style scoped></style>
