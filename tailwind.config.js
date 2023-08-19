/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#fcfbfd",
        secondary: '#0779E4'
      },
    },
    plugins: [
      require('flowbite/plugin'),
    ]
  },
}

