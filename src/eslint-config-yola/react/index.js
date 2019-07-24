module.exports = {
  extends: [
    '../base',
    '../base/rules/strict',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
  ].map(require.resolve),
  rules: {},
};
