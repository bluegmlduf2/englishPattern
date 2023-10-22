export default defineNuxtConfig({
  srcDir: 'src',
  devtools: true,
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },

  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'ko',
        file: 'ko-KR.json',
      },
      { code: 'ja', file: 'ja-JP.json' },
    ],
    defaultLocale: 'ko',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
  },

  vite: {
    logLevel: 'info',
  },
})
