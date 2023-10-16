/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      height: theme => ({
        '112': '28rem',
        '120': '30rem',
      }),
      minHeight: theme => ({
        '80': '20rem',
      }),
      colors: {
        palette: {
          lighter: '#F5F3FF',
          light: '#DDD6FE',
          primary: '#3d83ff',
          dark: '#4C1D95',
        },
      }
      // fontFamily: {
      //   primary: ['"Josefin Sans"']
      // }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
  darkMode: "false",
};
