/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},  // Ensure 'sm' is set correctly if customized
      },
      colors: {
        primary: '#FF844B', // Your primary color
        secondary: '#1E1B4B',
        bigtext:'#1e1742d8',
        smtext:'#63666b',
        mdtext:'#4e5054',
        buttonblue:'#1E1B4B' ,
        themeBaseColor:"#2956a3"// Your secondary color
      },
    },
  
  },
  plugins: [require("preline/plugin"), require('@tailwindcss/forms'),],
};
