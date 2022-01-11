module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-grey': '#E2E2E2',
        'dark-grey': '#C4C4C4',
      },
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}