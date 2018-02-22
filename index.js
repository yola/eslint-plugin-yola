'use strict';

const baseConfig = require('eslint-config-airbnb-base');
const extendedConfig = require('eslint-config-airbnb');
const prettierConfig = require('eslint-config-prettier');

const createConfig = require('./src/create-config');
const rules = require('./src/rules');

const plugin = {
  configs: {
    base: createConfig(baseConfig),
    react: createConfig(extendedConfig),
    prettier: createConfig(prettierConfig),
  },
  rules,
};

module.exports = plugin;
