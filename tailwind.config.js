module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#41D3BD',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
