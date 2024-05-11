module.exports = {
  content: [
    './node_modules/preline/preline.js',
    "./src/**/*.{html,js}",
    // "node_modules/flowbite-react/lib/**/*.js",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    // require("flowbite/plugin"),
  ],
}