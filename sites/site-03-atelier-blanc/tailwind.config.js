/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'blanc-bg':      '#faf9f7',
        'blanc-primary': '#2d2d2d',
        'blanc-accent':  '#b8a99a',
        'blanc-light':   '#ede9e4',
        'blanc-white':   '#ffffff',
        'blanc-muted':   '#8c8278',
      },
      fontFamily: {
        garamond: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        josefin:  ['"Josefin Sans"', 'sans-serif'],
        jp:       ['"Noto Sans JP"', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
