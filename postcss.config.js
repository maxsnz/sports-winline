/* eslint global-require: 0 */
const path = require('path');

const context = path.resolve(__dirname, 'src');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: context,
    }),
    require("autoprefixer"),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
