module.exports = {
  extends: [
    '../base',
    '../base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
