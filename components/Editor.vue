<template>
  <section class="max-w-md">
    <div class="border rounded-xl shadow-md min-h-[200px]">
      <div class="bg-gray-200 rounded-t-xl p-2 flex">
        <div class="flex justify-around items-end">
          <div @click="editor.commands.toggleBold()">
            <Icon
              name="ic:baseline-format-bold"
              class="w-6 h-6"
            />
          </div>
          <div @click="editor.commands.toggleItalic()">
            <Icon
              name="ic:baseline-format-italic"
              class="w-6 h-6"
            />
          </div>
          <div @click="editor.commands.toggleStrike()">
            <Icon
              name="ic:twotone-strikethrough-s"
              class="w-6 h-6"
            />
          </div>
          <div @click="editor.commands.toggleHighlight()">
            <Icon
              name="material-symbols:format-ink-highlighter-outline"
              class="w-6 h-6"
            />
          </div>
        </div>
        <div class="w-[1px] h-6 bg-black mx-4" />
        <div class="flex justify-around w-full">
          <div @click="editor.commands.toggleHeading({ level: 1 })">
            <Icon
              name="bi:type-h1"
              class="w-6 h-6"
            />
          </div>
          <div @click="editor.commands.toggleHeading({ level: 2 })">
            <Icon
              name="bi:type-h2"
              class="w-6 h-6"
            />
          </div>
          <div @click="editor.commands.toggleHeading({ level: 3 })">
            <Icon
              name="bi:type-h3"
              class="w-6 h-6"
            />
          </div>
        </div>
      </div>
      <editor-content
        :editor="editor"
        class="pt-4 px-2"
      />
    </div>
  </section>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { useEditorStore } from '~/store/editor'

const editor = useEditor({
  content: `
          <h1>${useEditorStore().heading}</h1>
          <p>${useEditorStore().text}</p>
        `,
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    useEditorStore().fullText = editor.getHTML()
  }
})
</script>

<style>
.ProseMirror {
  h1 {
    @apply text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl;
  }
}
</style>
