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
  modules: ["@nuxt/ui",
    "@nuxt/image",
    '@nuxtjs/seo',
    "nuxt-module-hotjar",
    '@nuxtjs/google-analytics'
  ],
  colorMode: {
    preference: 'dark'
  },
  hotjar: {
    hotjarId: 4953041,
    scriptVersion: 6,
    debug: false
  },
  googleAnalytics: {
    id: 'G-8X0M04SQ9E'
  }
})