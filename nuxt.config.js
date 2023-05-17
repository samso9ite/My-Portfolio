export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'samso9ite-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
        '~static/assets/style.css',
        '~static/assets/css/bootstrap.min.css',
        '~static/assets/css/component.css',
        '~static/assets/css/font-awesome.min.css',
        '~static/assets/css/normalize.css',
        '~static/assets/css/slick.css',
        '~static/assets/css/slicknav.css',
        '~static/assets/css/themify-icons.css',
        '~static/assets/css/venobox.css'
  ],

  script: [
    {
      src: "https://code.jquery.com/jquery-3.5.1.min.js",
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/jquery.min.js',
      body: true
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/bootstrap.min.js',
      body: true
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/jquery.slicknav.min.js',
      body: true
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/scrollclass.min.js',
      body: true
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/venobox.js',
      body: true
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/plugins.js',
      body: true
    },
    { 
      type: 'text/javascript', 
      src: '~static/assets/js/main.js',
      body: true
    }
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
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
