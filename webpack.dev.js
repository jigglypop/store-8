const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const PORT = process.env.PORT || 8000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: PORT,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
  },
});
