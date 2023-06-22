'use strict';

const baseConfig = require('./src/eslint-config-yola/base');
const reactConfig = require('./src/eslint-config-yola/react');
// const typescriptConfig = require('./src/eslint-config-yola/typescript');
const prettierConfig = require('eslint-config-prettier');

const createConfig = require('./src/create-config');
const rules = require('./src/rules');

const plugin = {
  configs: {
    base: createConfig(baseConfig),
    react: createConfig(reactConfig),
    prettier: createConfig(prettierConfig),
    // typescript: createConfig(typescriptConfig),
  },
  rules,
};

module.exports = plugin;
