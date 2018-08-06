module.exports = {
  extends: [require.resolve('./src/eslint-config-yola/base'), 'prettier'],
  env: {
    browser: false,
    jest: true,
    node: true,
  },

  // This rule turned off in favor of support node@4
  // Error: Block-scoped declarations (let, const, function, class)
  // not yet supported outside strict mode
  rules: {
    strict: 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
};
