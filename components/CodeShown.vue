<template>
  <ClientOnly>
    <highlightjs
      class="w-full rounded-xl"
      language="html"
      :code="'<div>' + headerText + chosenForm + button + '</div>'"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { useEditorStore } from '~/store/editor'

interface Props {
  buttonColor?: string
  form?: string
}

const editor = useEditorStore()

const props = withDefaults(defineProps<Props>(), {
  buttonColor: 'blue',
  form: ''
})

const chosenForm = computed(() => {
  switch (props.form) {
    case 'feedback':
      return feedbackForm
    case 'review':
      return reviewForm
  }
})

const headerText = `
  <h1 class="widget__title">${editor.heading}</h1>
  <p class="widget__text">${editor.text}</p>
`

const feedbackForm = `
  <form class="widget__form">
    <input type="textarea" class="form__input" placeholder="Ваша думка"/>
    <input type="text" class="form__input" placeholder="Ваш email"/>
  </form>
`

const reviewForm = `
  <form class="widget__form">
    <input type="textarea" class="form__input" placeholder="Ваша відгук"/>
    <input type="text" class="form__input" placeholder="Ваш email"/>
  </form>
`

const button = `
  <button class="widget__button" style="background-color: ${props.buttonColor}">Відправити</button>
`
</script>

<style scoped></style>
