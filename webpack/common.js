const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const loaders = require('./loaders');

const isDev = process.env.APP_ENV === 'development';

module.exports = {
  context: path.resolve(process.cwd()),
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
    pathinfo: false,
  },
  module: {
    rules: loaders,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.ts', '.tsx'],
    }),
    new WebpackManifestPlugin({
      fileName: path.resolve(process.cwd(), 'public/webpack-assets.json'),
      filter: (file) => file.isInitial,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      APP_ENV: JSON.stringify(process.env.APP_ENV || 'development'),
    }),
    new webpack.DefinePlugin({
      RUNTIME_ENV: JSON.stringify('client'),
    }),
  ],
  resolve: require('./resolve'),
  stats: {
    entrypoints: false,
  },
};
