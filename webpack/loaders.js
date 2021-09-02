module.exports = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: false,
    },
  },
  {
    test: /\.(woff2?|ttf|eot)$/,
    type: 'asset/resource',
    generator: {
      filename: '[name].[hash:8].[ext]',
      emit: process.env.TARGET_ENV !== 'node',
    },
  },
  {
    test: /\.(gif|png|svg|jpe?g|webp)$/,
    type: 'asset/resource',
    generator: {
      filename: '[name].[hash:8].[ext]',
      emit: process.env.TARGET_ENV !== 'node',
    },
  },
];
