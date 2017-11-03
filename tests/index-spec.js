const plugin = require('../index');

test('Plugin must contain configs and rules properties', () => {
  expect(plugin.configs).toMatchSnapshot();
  expect(plugin.rules).toMatchSnapshot();
});
