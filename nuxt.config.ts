// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      cookieKey: 'locale',
    },
    locales: [
      {
        code: 'en',
        backendCode: 'en',
        language: 'en-US',
        name: 'English',
        shortName: 'Eng',
      },
      {
        code: 'de',
        backendCode: 'de',
        language: 'de-DE',
        name: 'Deutch',
        shortName: 'De',
      },
    ],
    vueI18n: './i18n/index.ts',
  },
})
