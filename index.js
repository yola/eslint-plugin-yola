'use strict';

const baseConfig = require('eslint-config-airbnb-base');
const extendedConfig = require('eslint-config-airbnb');

const createConfig = require('./src/create-config');
const rules = require('./src/rules');

module.exports = {
  configs: {
    base: createConfig(baseConfig),
    react: createConfig(extendedConfig),
  },
  rules
};
