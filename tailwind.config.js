/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "sp-pink": "#F2E3E1",
        "sp-blue": "#21364F",
        "unnamed-color" : "#042134",
        "unnamed-gray" : "#F0F2F6",
        "sp-gray" : "#D3D3D3",
        "sp-black" : "#222222",
        "sp-solid-blue" : {
          "700" : "#1C2F44",
          "500" : "#3A5877"
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
