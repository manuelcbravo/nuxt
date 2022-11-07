export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;display=swap' },
      { rel: 'stylesheet', href: '/../assets/css/vendor.min.css' },
      { rel: 'stylesheet', href: '/../assets/css/theme.minc619.css?v=1.0' },
      { rel: 'preload', href: '/../assets/css/theme.min.css', as:'style',  'data-hs-appearance':'default' },
      { rel: 'preload', href: '/../assets/css/theme-dark.min.css', as:'style',  'data-hs-appearance':'default' },
    ],
    script: [
      {src: "https://code.jquery.com/jquery-3.5.1.min.js"},
      {src: "/../assets/js/vendor.min.js"},
      {src: "/../assets/js/theme.min.js"},
      {src: "/../assets/js/hs.theme-appearance.js"},
    ],
    bodyAttrs: {
      class: 'has-navbar-vertical-aside navbar-vertical-aside-show-xl footer-offset'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
