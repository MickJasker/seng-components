const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminWebpWebpackPlugin(),
    ],
  },
};
