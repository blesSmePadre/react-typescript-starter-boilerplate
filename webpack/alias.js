const path = require('path');
const aliases = require('../tsconfig.json').compilerOptions.paths;

module.exports = Object.keys(aliases).reduce(
  (acc, key) => ({
    ...acc,
    [key.replace('/*', '')]: path.resolve(
      process.cwd(),
      aliases[key][0].replace('/*', '/')
    ),
  }),
  {}
);
