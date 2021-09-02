/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client?overlay=false',
    path.resolve(process.cwd(), 'src/client'),
  ],
  cache: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
});
