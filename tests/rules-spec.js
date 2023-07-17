'use strict';

const pluginDependencies = require('../src/plugins-dependencies');

const pluginRulesNames = ['mockRuleFoo', 'mockRuleBar', 'mockRuleBaz'];

pluginDependencies.forEach((pluginName) => {
  if (pluginName === '@typescript-eslint') {
    jest.mock('@typescript-eslint/eslint-plugin', () => ({
      rules: {
        mockRuleFoo: true,
        mockRuleBar: true,
        mockRuleBaz: true,
      },
    }));
  } else {
    jest.mock(`eslint-plugin-${pluginName}`, () => ({
      rules: {
        mockRuleFoo: true,
        mockRuleBar: true,
        mockRuleBaz: true,
      },
    }));
  }
});

const rules = require('../src/rules');

describe('get plugins rules object', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('contain rules from dependency plugins prefixed by its name', () => {
    const hasDependencyRules = pluginDependencies.every((plugin) =>
      pluginRulesNames.every((pluginRuleName) => rules[`${plugin}/${pluginRuleName}`])
    );

    expect(hasDependencyRules).toBe(true);
  });
});
