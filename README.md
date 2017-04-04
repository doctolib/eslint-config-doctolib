# eslint-config-doctolib

ESLint configuration used in Doctolib projects.

## Install

```sh
yarn add eslint-config-doctolib --dev
```

## Usage

### Basic

```js
// .eslintrc.js
{
  extends: 'doctolib',
}
```

### Mocha tests

```js
// .eslintrc.js
{
  extends: ['doctolib', 'doctolib/mocha'],
}
```

### React

```js
// .eslintrc.js
{
  extends: ['doctolib', 'doctolib/react'],
}
```

## License

MIT
