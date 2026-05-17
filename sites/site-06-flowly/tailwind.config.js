/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'fl-bg': '#f8faff',
        'fl-primary': '#1e1b4b',
        'fl-brand': '#4f46e5',
        'fl-accent': '#06b6d4',
        'fl-surface': '#ffffff',
        'fl-text': '#374151',
        'fl-muted': '#6b7280',
        'fl-border': '#e5e7eb',
      },
      fontFamily: {
        sans: ['"DM Sans"', '"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'float2': 'float2 9s ease-in-out 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(79, 70, 229, 0.2), 0 0 80px rgba(79, 70, 229, 0.08)',
        'card': '0 4px 24px rgba(30, 27, 75, 0.08)',
        'card-lg': '0 8px 48px rgba(30, 27, 75, 0.12)',
      },
    },
  },
  plugins: [],
};
