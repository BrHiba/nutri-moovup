/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      primary: "var(--primary)",
      "primary-hover": "var(--primary-hover)",
      "primary-soft": "var(--primary-soft)",
      secondary: "var(--secondary)",
      purple: "var(--purple)",
      yellow: "var(--yellow)",
      blue: "var(--blue)",
      text: {
        main: "var(--text-main)",
        muted: "var(--text-muted)",
      },
    },
  },
},

  plugins: [],
}
