module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: './webpack',
      },
    },
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'global-require': 'off',

    'react/require-default-props': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    /* TODO fix (exclude alises) */
    'import/order': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    es2017: true,
  },
};
