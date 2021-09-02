module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'styled-components',
    ['inline-react-svg'],
    [
      'module-resolver',
      {
        alias: require('./webpack/alias'),
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
