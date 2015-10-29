module.exports = {
  "extends": "doctolib",

  "env": {
    "mocha": true,
    "node": true
  },

  "rules": {
    "no-magic-numbers": 0,
    "mocha/no-exclusive-tests": 2
  },

  "plugins": [
    "mocha"
  ]
};
