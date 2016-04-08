module.exports = {
  "extends": "doctolib",

  "env": {
    "mocha": true,
    "node": true
  },

  "rules": {
    "mocha/no-exclusive-tests": 2
  },

  "plugins": [
    "mocha"
  ]
};
