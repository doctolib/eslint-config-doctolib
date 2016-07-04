module.exports = {
  extends: 'doctolib',

  env: {
    mocha: true,
    node: true,
  },

  rules: {
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-synchronous-tests': 'off',
  },

  plugins: [
    'mocha',
  ],
};
