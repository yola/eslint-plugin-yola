const plugin = require('../index');

const makeShallow = (obj) => {
  const o = Object.assign({}, obj);
  Object.keys(o).forEach((key) => {
    o[key] = true;
  });

  return o;
};

describe('eslint-plugin-yola', () => {
  it('must contain configs and rules properties', () => {
    const p = Object.assign({}, plugin);

    p.rules = makeShallow(p.rules);
    Object.keys(p.configs)
      .forEach((key) => {
        if (p.configs[key].parser) {
          p.configs[key].parser = true;
        }
        p.configs[key].rules = makeShallow(p.configs[key].rules);
      });
    expect(p.configs).toMatchSnapshot();
    expect(p.rules).toMatchSnapshot();
  });
});
