const path = require('path');

const createConfig = require('../src/create-config');
const propsToPick = require('../src/props-to-pick');

const propsToHave = propsToPick.concat('parser', 'plugins', 'rules');

describe('create-config extends base config with provided', () => {
  const mockParser = 'mock-parser';
  let extendedConfig;
  let extension;
  let mockRules;

  beforeEach(() => {
    mockRules = {
      foo: true,
      bar: true,
      baz: true,
    };

    extension = {
      env: 'env',
      extends: [path.resolve(__dirname, './__mocks__/extension-config')],
      parseOptions: 'parseOptions',
      parser: mockParser,
      plugins: ['plugin1', 'plugin2'],
      root: 'root',
      rules: mockRules,
      settings: 'settings',
      unnecessaryProp: true,
    };

    extendedConfig = createConfig(Object.assign({}, extension));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('merge extension into base config', () => {
    const isRulesMerged = Object.keys(mockRules)
      .every(rule => !!extendedConfig.rules[rule]);

    expect(isRulesMerged).toBe(true);
  });

  it('picks necessary props only', () => {
    const isPickedPropsOnly = Object.keys(extendedConfig)
      .every(prop => propsToHave.indexOf(prop) !== -1);

    expect(isPickedPropsOnly).toBe(true);
  });

  it('doesn\'t override plugins array', () => {
    expect(extendedConfig.plugins.length).toBe(1);
    expect(extendedConfig.plugins[0]).toBe('yola');
  });

  it('resolves "extends" property rules', () => {
    expect(extendedConfig.rules['extends-rule']).toBe(true);
  });
});
