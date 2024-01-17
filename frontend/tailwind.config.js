/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        camptonbold: ["Campton-Bold"],
        camptonlight: ["Campton-Light"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
