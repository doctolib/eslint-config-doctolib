# eslint-config-zipper

ESLint configuration used in Doctolib zipper project.

## Install

```sh
yarn add eslint-config-zipper --dev
```

## Usage

### Basic

```js
// .eslintrc.js
{
  extends: 'zipper',
}
```

### Mocha tests

```js
// .eslintrc.js
{
  extends: ['zipper', 'zipper/mocha'],
}
```

### React

```js
// .eslintrc.js
{
  extends: ['zipper', 'zipper/react'],
}
```

## License

MIT
