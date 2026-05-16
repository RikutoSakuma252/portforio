export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'atelier BLANC | プライベートヘアサロン',
      meta: [
        { name: 'description', content: '骨格・ライフスタイルに寄り添う、完全プライベートサロン。' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Josefin+Sans:wght@300;400&family=Noto+Sans+JP:wght@300;400&display=swap',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
})
