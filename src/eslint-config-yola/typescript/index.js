module.exports = {
  extends: ['./rules/ts'].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
};
