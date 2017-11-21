const path = require('path');

const getConfigBase = require('../src/get-config-base');
const createConfig = require('../src/create-config');
const propsToPick = require('../src/props-to-pick');

const baseProps = [
  'overrides',
  'parser',
  'plugins',
  'rules',
];

const propsToHave = propsToPick.concat(baseProps);

describe('createConfig creates extended config', () => {
  const baseConfig = getConfigBase();
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

  it('merge extension rules into base', () => {
    const isRulesMerged = Object.keys(mockRules)
      .every(rule => !!extendedConfig.rules[rule]);

    expect(isRulesMerged).toBe(true);
  });

  it('picks only necessary props from extension', () => {
    const isPickedPropsOnly = Object.keys(extendedConfig)
      .every(prop => propsToHave.indexOf(prop) !== -1);

    expect(isPickedPropsOnly).toBe(true);
  });

  it('doesn\'t get "plugins" prop overrided by extension', () => {
    expect(extendedConfig.plugins).toEqual(baseConfig.plugins);
  });

  it('doesn\'t get "parser" prop overrided by extension', () => {
    expect(extendedConfig.parser).toBe(baseConfig.parser);
  });

  it('resolves "extends" property rules', () => {
    expect(extendedConfig.rules['extends-rule']).toBe(true);
  });
});
