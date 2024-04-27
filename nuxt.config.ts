// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{
        name: 'description',
        content: 'First-rate IT services for the East of England: EOEIT specializes in bespoke software development, innovative web development, strategic digital marketing, comprehensive cybersecurity, and expert SEO. Discover how our tailored IT solutions can drive your business forward.',
      }]
    }
  },
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
    "@weareheavy/nuxt-cookie-consent",
    'nuxt-gtag'
  ],
  colorMode: {
    preference: 'dark'
  },
  hotjar: {
    hotjarId: 4953041,
    scriptVersion: 6,
    debug: false
  },
  cookieConsent: {
    provider: 'cookiebot',
    cbid: '57dd516e-3b9e-4f59-a58e-ed53fbfbe378',
    consentMode: false,
    consentModeDefaults: false,
  },
  gtag: {
    id: 'G-8X0M04SQ9E',
  },
})