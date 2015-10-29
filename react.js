module.exports = {
  "extends": "doctolib",

  "env": {
    "browser": true
  },

  "ecmaFeatures": {
    "jsx": true
  },

  "rules": {
    "jsx-quotes": 2,

    "react/display-name": 2,
    "react/forbid-prop-types": 1,
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-prop-types": 1,
    "react/jsx-sort-props": 1,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 1,
    "react/wrap-multilines": 2
  },

  "plugins": [
    "react"
  ]
};
