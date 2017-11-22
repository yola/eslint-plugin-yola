const plugin = require('../index');

describe('eslint-plugin-yola', () => {
  it('must contain configs and rules properties', () => {
    expect(plugin).toHaveProperty('configs.base.rules');
    expect(plugin).toHaveProperty('configs.react.rules');
    expect(plugin).toHaveProperty('rules');
  });
});
