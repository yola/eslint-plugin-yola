'use strict';

const merge = require('lodash/merge');
const pick = require('lodash/pick');
const get = require('lodash/get');

const getConfigBase = require('./get-config-base');
const pluginsDependencies = require('./plugins-dependencies');
const propsToPick = require('./props-to-pick');

const isPluginRule = (ruleName) =>
  pluginsDependencies.some((plugin) => ruleName.indexOf(`${plugin}/`) === 0);

// To avoid conflicts, rules from dependency plugins are scoped by prefixing
const getConfigRules = (config) =>
  Object.keys(config.rules).reduce((rules, ruleName) => {
    const result = Object.assign({}, rules);
    const key = isPluginRule(ruleName) ? `yola/${ruleName}` : ruleName;

    result[key] = config.rules[ruleName];

    return result;
  }, {});

const extendConfig = (conf, ext) => {
  const config = conf;
  let extension = ext;

  if (typeof extension === 'string') {
    extension = require(ext); // eslint-disable-line global-require, import/no-dynamic-require
  }

  const extensionRules = { rules: getConfigRules(extension) };

  if (extension.overrides) {
    config.overrides = get(config, 'overrides', []).concat(extension.overrides);
  }

  return merge(config, pick(extension, propsToPick), extensionRules);
};

const createConfig = (extension) => {
  let config = extendConfig(getConfigBase(), extension);

  if (extension.extends && extension.extends.length) {
    config = extension.extends.reduce(extendConfig, config);
  }

  return config;
};

module.exports = createConfig;
