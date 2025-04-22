/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#0D3B66',
          900: '#0F4C75',
        },
        teal: {
          400: '#3EDBF0',
          500: '#16C6D9',
          600: '#0F9DAF',
        },
        coral: {
          100: '#FFEAED',
          500: '#F45B69',
          600: '#D93A48',
          800: '#A02A35',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};