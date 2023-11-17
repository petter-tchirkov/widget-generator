<template>
  <ClientOnly>
    <TabView class="max-w-[900px] max-h-lg">
      <TabPanel header="HTML">
        <HighLight
          :with-header="true"
          language="html"
          :code="`<div class='result'>${
            headerText + chosenForm + button
          }\n</div>`"
        />
      </TabPanel>
      <TabPanel header="css">
        <HighLight
          :with-header="true"
          language="css"
          :code="css"
        />
      </TabPanel>
    </TabView>
  </ClientOnly>
</template>

<script setup lang="ts">
import HighLight from 'vue3-highlight-component'
import { useEditorStore } from '~/store/editor'
import { useReviewStore } from '~/store/review'
import { smileForm, smileFormCss } from '~/components/smileForm'
import { markForm, markFormCss } from '~/components/markForm'
import { useResultStore } from '~/store/result'

const result = useResultStore()

const review = useReviewStore()

const editor = useEditorStore()

const chosenForm = computed(() => {
  switch (result.selectedForm) {
    case 'feedback':
      return feedbackForm
    case 'review':
      return reviewForm
    default:
      return ''
  }
})

const getButtonColor = computed(() => {
  switch (result.selectedButtonColor) {
    case 'blue':
      return '#1296e7'
    case 'green':
      return '#689f38'
    case 'orange':
      return '#f59e0a'
    case 'red':
      return '#ef4444'
    case 'purple':
      return '#a855f7'
  }
})

const getCtaColor = computed(() => {
  switch (result.selectedCta) {
    case 'telegram':
      return '#1396e7'
    case 'viber':
      return '#9179ee'
  }
})

const getAnswerType = computed(() => {
  switch (review.answerType) {
    case 'smiles':
      return smileForm
    case 'marks':
      return markForm
  }
})

const getAnswerTypeCss = computed(() => {
  if (result.selectedForm === 'review') {
    switch (review.answerType) {
      case 'smiles':
        return smileFormCss
      case 'marks':
        return markFormCss
    }
  } else {
    return ''
  }
})

const headerText = `
  <h1 class="result__title">${editor.heading}</h1>
  <p class="result__text">${editor.text}</p>
`

const feedbackForm = `
  <form class="result__form form">
    <textarea
      class="form__textarea"
      placeholder="Ваша думка"
      rows="5"
    />
    <input
      type="email"
      class="form__email"
      placeholder="Ваш email"
    />
  </form>
`

const cta = `
  <button class="result__cta">
    <svg fill="#fff" width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g stroke-width="0"></g>
      <g stroke-linecap="round" stroke-linejoin="round"></g>
      <g>
        <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"></path>
      </g>
    </svg>
    <span>Написати в ${result.selectedCta}</span>
  </button>
`

const reviewForm = `
  <form class="result__form form" action="10.0.98.105/api/survey" method="post">
    ${getAnswerType.value}
    <textarea
      class="form__textarea"
      placeholder="Ваша думка"
      rows="5"
      name="text"
    />
    <input
      type="email"
      class="form__email"
      placeholder="Ваш email"
      name="email"
    />
  </form>
`

const button = computed(() => {
  switch (result.selectedForm) {
    case 'cta':
      return cta
    default:
      return `
  <button type="submit" class="result__btn ${result.selectedButtonColor}">
    ${result.selectedButtonLabel}
  </button>
      `
  }
})

const css = computed(() => {
  return `
    .result {
      display: block;
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
    ${getAnswerTypeCss.value}
    ${
      result.selectedForm !== 'cta'
        ? `
    .form {
      width: 100%;
    }
    input::placeholder {
      font-size: 14px;
    }
    .form__textarea,
    .form__email {
      width: 100%;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.47);
      margin-bottom: 10px;
      padding: 8px 8px;
    }`
        : ''
    }
    ${
      result.selectedForm !== 'cta'
        ? `
    .result__btn {
      width: 100%;
      padding: 10px 16px;
      border-radius: 4px;
      color: #fff;
    }
    .${result.selectedButtonColor} {
      background: ${getButtonColor.value};
    }
        `
        : `
    .result__cta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      border: none;
      padding: 11.42px 16px;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      text-transform: capitalize;
    }
    .${result.selectedCta} {
      background: ${getCtaColor.value};
    }
        `
    }
  `
})
</script>

<style>
.p-tabview-panels {
  height: 400px;
  overflow: auto;
  padding: 0 !important;
}
</style>
