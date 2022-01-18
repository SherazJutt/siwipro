module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1rem',
        'md': '1rem',
        'lg': '2rem',
        'xl': '10rem',
        '2xl': '15rem',
      },
    },
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