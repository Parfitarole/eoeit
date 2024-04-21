// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    '@nuxtjs/seo',
    "nuxt-module-hotjar",
    "@weareheavy/nuxt-cookie-consent"
  ],
  colorMode: {
    preference: 'dark'
  },
  hotjar: {
    hotjarId: 4953041,
    scriptVersion: 6,
    debug: false
  },cookieConsent: {
    provider: 'cookiebot',
    cbid: '57dd516e-3b9e-4f59-a58e-ed53fbfbe378'
  }

})