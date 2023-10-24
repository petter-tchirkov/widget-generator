<template>
  <section class="max-w-md">
    <div class="border rounded">
      <div class="bg-black rounded-t p-2 flex">
        <div class="flex gap-2">
          <UButton
            color="gray"
            @click="editor.commands.toggleBold()">
            <Icon name="material-symbols:format-bold" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.toggleItalic()">
            <Icon name="material-symbols:format-italic" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.toggleStrike()">
            <Icon name="material-symbols:strikethrough-s" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.toggleCode()">
            <Icon name="material-symbols:code" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.toggleHighlight()">
            <Icon name="material-symbols:format-ink-highlighter-outline" />
          </UButton>
        </div>
        <div class="w-[1px] h-6 bg-gray-100 mx-4"></div>
        <div class="flex gap-2">
          <UButton
            color="gray"
            @click="editor.commands.toggleHeading({ level: 1 })">
            <Icon name="material-symbols:format-h1" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.toggleHeading({ level: 2 })">
            <Icon name="material-symbols:format-h2" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.toggleHeading({ level: 3 })">
            <Icon name="material-symbols:format-h3" />
          </UButton>
          <UButton
            color="gray"
            @click="editor.commands.setParagraph()">
            <Icon name="material-symbols:format-paragraph" />
          </UButton>
        </div>
      </div>
      <editor-content
        :editor="editor"
        class="pt-4 px-2" />
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
    @apply text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white;
  }
}
</style>
