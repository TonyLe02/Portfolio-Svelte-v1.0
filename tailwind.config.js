// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,svelte}', './public/index.html'],
  darkMode: 'media', // or remove this line if you don't want to use dark mode
  theme: {
    extend: {
      colors: {
        svelte: '#FF3E00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}