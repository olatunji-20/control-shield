// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {
    icons: ['material-symbols']
  },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-tiptap-editor'],
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  image: {
    domains: ['www.google.com'],
    provider: 'ipx'
  }
})