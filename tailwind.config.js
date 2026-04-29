/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        indigo:       '#262262',
        bronze:       '#C49A6C',
        silver:       '#D9D9D9',
        charcoal:     '#1f2937',
        'cool-grey':  '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        tijha: {
          primary:            '#262262',
          secondary:          '#C49A6C',
          accent:             '#C49A6C',
          neutral:            '#D9D9D9',
          'base-100':         '#ffffff',
          'base-200':         '#D9D9D9',
          'base-content':     '#1f2937',
          'primary-content':  '#ffffff',
          'secondary-content':'#262262',
        },
      },
    ],
  },
}
