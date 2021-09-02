module.exports = {
  modules: ['src', 'node_modules'],
  descriptionFiles: ['package.json'],
  extensions: ['.ts', '.tsx', '.js', '.json'],
  alias: require('./alias'),
  fallback: {
    fs: false,
    vm: false,
    net: false,
    tls: false,
  },
};
