module.exports = {
  extends: [...['../base', './rules/ts'].map(require.resolve)],
  parser: '@typescript-eslint/parser',
  rules: {},
};
