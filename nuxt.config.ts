// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css']
})
