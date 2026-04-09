import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-high': '#e7e8ee',
        'primary-container': '#0F0866',
        'on-secondary-fixed-variant': '#403996',
        'tertiary-container': '#1c0067',
        'on-secondary-fixed': '#130068',
        'surface-tint': '#5555a9',
        'primary-fixed': '#e2dfff',
        'on-primary': '#ffffff',
        'secondary-container': '#a09bfe',
        'inverse-on-surface': '#eff0f6',
        'on-surface': '#191c20',
        'background': '#fbfbff',
        'on-background': '#0F0866',
        'surface': '#fbfbff',
        'surface-container': '#f1f3f9',
        'secondary': '#5852b0',
        'on-tertiary-container': '#8675e4',
        'tertiary': '#030018',
        'secondary-fixed': '#e3dfff',
        'on-secondary': '#ffffff',
        'on-surface-variant': '#474d66',
        'surface-variant': '#e1e2e8',
        'on-error': '#ffffff',
        'inverse-surface': '#2e3135',
        'surface-container-highest': '#e1e2e8',
        'error-container': '#fff1f0',
        'on-error-container': '#cf1322',
        'on-tertiary-fixed': '#1a0063',
        'on-tertiary-fixed-variant': '#4733a1',
        'tertiary-fixed': '#e5deff',
        'outline': '#d1d5db',
        'primary-fixed-dim': '#c1c1ff',
        'outline-variant': '#e2e8f0',
        'surface-dim': '#d8dae0',
        'primary': '#0F0866',
        'surface-bright': '#fbfbff',
        'secondary-fixed-dim': '#c4c0ff',
        'surface-container-lowest': '#ffffff',
        'on-tertiary': '#ffffff',
        'on-primary-fixed-variant': '#3c3c90',
        'on-primary-fixed': '#0d0565',
        'surface-container-low': '#f8fafc',
        'error': '#ba1a1a'
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
        full: '9999px'
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        label: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
