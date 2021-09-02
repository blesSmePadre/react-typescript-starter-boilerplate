/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call */

module.exports = () => {
  require('asset-require-hook')({
    extensions: ['gif', 'jpg', 'jpeg', 'png', 'webp'],
    publicPath: '/',
    limit: 10240,
    name: '[name].[hash:8].[ext]',
  });

  require('asset-require-hook')({
    extensions: ['woff', 'woff2', 'ttf', 'eot', 'svg'],
    publicPath: '/',
    limit: 10240,
    name: '[name].[hash:8].[ext]',
  });

  require('asset-require-hook')({
    extensions: ['css'],
    publicPath: '/',
    name: '[name].[hash:8].[ext]',
  });
};
