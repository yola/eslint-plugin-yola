module.exports = {
  extends: 'airbnb-base',

  // This rule turned off in favor of support node@4
  // Error: Block-scoped declarations (let, const, function, class)
  // not yet supported outside strict mode
  rules: {
    strict: 'off'
  }
};
