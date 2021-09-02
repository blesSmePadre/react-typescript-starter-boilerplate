/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: [path.resolve(process.cwd(), 'src/server/index')],
  context: path.resolve(process.cwd()),
  cache: false,
  target: 'node',
  output: {
    path: process.cwd(),
    publicPath: '/',
    filename: 'server-build.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    pathinfo: false,
  },
  module: {
    rules: require('./loaders'),
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      APP_ENV: JSON.stringify('production'),
    }),
    new webpack.DefinePlugin({
      RUNTIME_ENV: JSON.stringify('server'),
    }),
  ],
  resolve: require('./resolve'),
};
