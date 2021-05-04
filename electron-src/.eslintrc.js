/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: ['airbnb-typescript/base', 'prettier'],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'max-lines': 'error',
    'max-depth': 'error',
    'max-lines-per-function': 'error',
  },
};
