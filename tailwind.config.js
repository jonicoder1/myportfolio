//command to start tailwind
//npx tailwindcss -i ./src/css/styles.css -o ./public/styles.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/components/**/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
