const daisyui = require('daisyui')
const { mytheme } = require('./mytheme')
const config = {
  darkMode: 'class',
  daisyui: {
    themes: [{ mytheme }]
  },
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontSize: {
        '3xs': '0.5rem',
        '4xs': '0.375rem'
      }
    }
  },

  plugins: [daisyui]
}

module.exports = config
