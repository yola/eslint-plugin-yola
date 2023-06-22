module.exports = {
  extends: [
    '../base',
    'plugin:@typescript-eslint/recommended',
    ...['./rules/ts'].map(require.resolve),
  ],
  parser: '@typescript-eslint/parser',
  rules: {},
};
