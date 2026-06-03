/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A5C',
        accent: '#2563EB',
        bg: '#B8CCE0',
        surface: '#EFF6FF',
        text: '#0F172A',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}