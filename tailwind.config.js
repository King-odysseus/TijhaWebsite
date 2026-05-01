/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/flowbite-react/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#262262',
        bronze: '#C49A6C',
        silver: '#D9D9D9',
        charcoal: '#1f2937',
        'cool-grey': '#6b7280',
        'neo-bg': '#F5F5F7',
        'neo-dark': '#d1d1d6',
        'neo-light': '#ffffff',
        'brand-blue': '#007BFF',
        'brand-dark': '#1A1A1A',
        'brand-body': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'neo': '8px 8px 16px #d1d1d6, -8px -8px 16px #ffffff',
        'neo-sm': '4px 4px 8px #d1d1d6, -4px -4px 8px #ffffff',
        'neo-inset': 'inset 4px 4px 8px #d1d1d6, inset -4px -4px 8px #ffffff',
        'neo-btn': '6px 6px 12px #d1d1d6, -6px -6px 12px #ffffff',
        'neo-btn-active': 'inset 4px 4px 8px #d1d1d6, inset -4px -4px 8px #ffffff',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        tijha: {
          primary: '#262262',
          secondary: '#C49A6C',
          accent: '#C49A6C',
          neutral: '#D9D9D9',
          'base-100': '#ffffff',
          'base-200': '#F5F5F7',
          'base-content': '#1f2937',
          'primary-content': '#ffffff',
          'secondary-content': '#262262',
        },
      },
    ],
  },
}
