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

    "strict": [2, "never"],

    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-equals-spacing": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, {maximum: 3}],
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-space-before-closing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 1,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 2,
    "react/no-set-state": 0,
    "react/no-string-refs": 0,
    "react/no-unknown-property": 1,
    "react/prop-types": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 0,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [1, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'scope',
          'getObservables',
          'propTypes',
          'defaultProps',
          'getDefaultProps',
          'contextTypes',
          'childContextTypes',
          'obsTypes',
          'mixins',
          'constructor',
          'state',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }],
    "react/sort-prop-types": 0,
    "react/wrap-multilines": 2
  },

  "plugins": [
    "react"
  ]
};
