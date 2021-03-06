export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DevMind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: 'devmind-a120c.firebaseapp.com',
      databaseURL: 'https://devmind-a120c.firebaseio.com',
      projectId: 'devmind-a120c',
      storageBucket: 'devmind-a120c.appspot.com',
      messagingSenderId: '176367745988',
      appId: '1:176367745988:web:6b2c46cea937ba1a288291',
      measurementId: 'G-0EPPBG7L9F',
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      analytics: true,
      performance: true,
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
