/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        clipPath: {
          'none': 'none',
          'full': 'inset(0)'
        }
      },
      fontFamily: {
        'geist-black': ['geist-black', 'sans'],
        'geist-bold': ['geist-bold', 'sans'],
        'geist-light': ['geist-light', 'sans'],
        'geist-medium': ['geist-medium', 'sans'],
        'geist-regular': ['geist-regular', 'sans'],
        'turntbb': ['turntbb', 'sans'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    animation: true,
  }
}