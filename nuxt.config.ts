// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/theme.css',
    'primeicons/primeicons.css'
  ],
  primevue: {
    components: {
      include: ['Button', 'Dropdown', 'Checkbox', 'InputText', 'Password', 'Textarea', 'Rating']
    }
  }
})
