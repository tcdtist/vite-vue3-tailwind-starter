module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  ignorePatterns: ['dist', 'eslint.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
  },
  plugins: ['vue', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],

    'vue/multi-word-component-names': 'off',

    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/order': 'off',

    'no-param-reassign': ['warn', { props: false }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',

    'space-before-function-paren': 'off',
    'space-before-blocks': 'off',

    'global-require': 'off',
  },
}
