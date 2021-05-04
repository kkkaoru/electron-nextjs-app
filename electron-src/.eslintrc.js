/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
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
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'max-lines': 'error',
    'max-depth': 'error',
    'max-lines-per-function': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['preferButton'],
      },
    ],
  },
};
