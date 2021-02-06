// module.exports = {
//   plugins: {
//     autoprefixer: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//     tailwindcss: {},
//   }
// }
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    // require('postcss-import'),
  ]
}
