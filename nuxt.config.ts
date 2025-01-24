// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {
    icons: ['material-symbols']
  },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-aos'],
  image: {
    domains: ['www.google.com'],
    provider: 'ipx'
  },
})