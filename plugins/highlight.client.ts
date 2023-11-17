import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/vbscript-html'
import highlightJS from '@highlightjs/vue-plugin'
import HighLight from 'vue3-highlight-component'
import 'highlight.js/styles/atom-one-dark.css'

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('html', html)

  nuxtApp.vueApp.use(highlightJS)
  nuxtApp.vueApp.use(HighLight)
})
