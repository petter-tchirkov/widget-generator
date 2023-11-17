<template>
  <section class="w-full h-full">
    <Header>
      <template #pageTitle>Редагування</template>
    </Header>
    <div class="editor flex gap-4 w-full h-[calc(100%-80px)]">
      <div class="bg-white rounded-xl shadow-md p-4 overflow-auto">
        <div class="editor__controls flex flex-col gap-4">
          <Editor
            v-model="useEditorStore().editorContent"
            @text-change="codeShown = false"
          />
          <div
            class="flex flex-col items-center gap-4 p-4 rounded-xl shadow-md bg-gray-100"
          >
            <Dropdown
              v-model="result.selectedForm"
              class="w-full"
              :options="result.forms"
              option-label="name"
              option-value="value"
              placeholder="Яку форму додати?"
              @change="codeShown = false"
            />
            <Dropdown
              v-if="result.selectedForm !== 'cta'"
              v-model="result.selectedButtonColor"
              class="w-full"
              :options="result.buttonColors"
              option-label="name"
              option-value="value"
              placeholder="Колір кнопки"
              @change="codeShown = false"
            >
              <template #option="{ option }">
                <div class="flex">
                  <div
                    class="w-full h-6 rounded flex justify-center items-center py-2"
                    :style="{ background: option.color }"
                  >
                    <span class="text-white">{{ option.name }}</span>
                  </div>
                </div>
              </template>
            </Dropdown>
          </div>
          <div class="flex flex-col bg-gray-100 rounded-xl shadow-md">
            <settings-review-settings v-if="result.selectedForm === 'review'" />
            <settings-cta-settings v-if="result.selectedForm === 'cta'" />
          </div>
          <Button
            :disabled="!result.selectedForm"
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
          class="max-w-lg"
          :heading="useEditorStore().heading"
          :button-color="result.selectedButtonColor"
        />
        <EditorResult
          v-else
          :button-color="result.selectedButtonColor"
          :bg="selectedBg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useEditorStore } from '~/store/editor'
import { useResultStore } from '~/store/result'

const result = useResultStore()

const selectedBg: Ref<string | undefined> = ref()

const codeShown = ref(false)
</script>

<style scoped></style>
