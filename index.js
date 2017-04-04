module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
    }],
    semi: ['error', 'never'],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'default-case': 'off',
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],

    'import/prefer-default-export': 'off',
  },
};
