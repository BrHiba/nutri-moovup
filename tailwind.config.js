/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
     colors: {
        mint: "#ECFAF5",        // الخلفية الخضراء الفاتحة
        green: "#1FA971",       // الأخضر ديال النص و الزر
        "green-dark": "#17885C",
        dark: "#1F2933",        // لون العنوان
      },
  },
},
  plugins: [],
}
