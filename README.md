# eslint-config-doctolib

ESLint configuration used in Doctolib projects.

## Install

```
npm install eslint-config-doctolib
```

## Usage

### Basic

Require [babel-eslint](https://github.com/babel/babel-eslint).

```js
// .eslintrc
{
  "extends": "doctolib"
}
```

### Test

Require [babel-eslint](https://github.com/babel/babel-eslint) and [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha).

```js
// .eslintrc
{
  "extends": "doctolib/test"
}
```

### React

Require [babel-eslint](https://github.com/babel/babel-eslint) and [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```js
// .eslintrc
{
  "extends": "doctolib/react"
}
```

## License

MIT
