
export default {
  mode: 'spa',
  head: {
    title: 'RinokuDocs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Документация для RinokuBot' },
      { name: 'theme-color', content: '#4480ff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://rinokubot.space/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    "@/assets/global.css"
  ],
  plugins: [
  ],
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxt/content'
  ],
  build: {
    extend (config, ctx) {
    }
  }

}
