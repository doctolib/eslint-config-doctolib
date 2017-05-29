module.exports = {
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/no-string-refs': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
  },
}
