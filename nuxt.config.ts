// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [[
    "@pinia/nuxt",
    {
      autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
    },
  ], 
  "@nuxtjs/tailwindcss",
  '@nuxtjs/stylelint-module',
],
  css: [
    '@/assets/scss/global.scss'
  ],
  vite: {
    optimizeDeps: {
      include: [
        'animate.css'
      ]
    }
  }
})