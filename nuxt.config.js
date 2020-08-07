
export default {
  mode: 'spa',
  head: {
    title: 'RinokuDocs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Документация для NicoryBot' },
      { name: 'theme-color', content: '#4480ff' }
    ],
  },
  loading: { color: '#fff' },
  css: [
    "@/assets/global.css",
    "@/assets/styles.scss"
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
