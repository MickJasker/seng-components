const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpe?g|png)/,
          options: {
            quality: 75,
          },
        }],
        overrideExtension: false,
        detailedLogs: false,
        strict: true,
      }),
    ],
  },
};
