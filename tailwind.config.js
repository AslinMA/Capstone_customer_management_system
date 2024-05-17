/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
       "secondary": "#001E4B",
       "tartiary":"#707070",
       "pink": "EE9AE5",
       "green":"#15DC41",
       "dark_grenn":"#297239",
       "light_blue" : "#414751",
       "icon_background":"#F6F6F6"
      },
      boxShadow : {
        '3xl':'0px 10px 50px 0px rgba(0 ,0 , 0, 0.15)',
    }
    },
  },
  plugins: [],
}

