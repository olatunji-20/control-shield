/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        shield: {
          green: "#193032",
          black: "#0F111A",
          blight: "#DCE4FE",
          bgreen: "#46D3B0"
        }
      }
    },
  },
  plugins: [],
}

