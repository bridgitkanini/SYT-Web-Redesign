/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey1: '#707979',
        grey2: '#82908d',
        grey3: '#acb1ae',
        grey4: '#c4ccca',
        grey5: '#d9d9d9',
        green1: '#698881',
        green2: '#659187',
        green3: '#5e9d8f',
        green4: '#87afa5',
        green5: '#b3cdc7',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
