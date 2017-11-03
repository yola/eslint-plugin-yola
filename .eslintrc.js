module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: false,
    jest: true,
    node: true,
  },

  // This rule turned off in favor of support node@4
  // Error: Block-scoped declarations (let, const, function, class)
  // not yet supported outside strict mode
  rules: {
    strict: 'off'
  }
};
