'use strict';

const pluginsDependencies = require('./plugins-dependencies');

module.exports = pluginsDependencies.reduce((rules, pluginName) => {
  let plugin;

  switch (pluginName) {
    case '@typescript-eslint':
      // eslint-disable-next-line global-require, import/no-dynamic-require
      plugin = require('@typescript-eslint/eslint-plugin');
      break;
    default:
      // eslint-disable-next-line global-require, import/no-dynamic-require
      plugin = require(`eslint-plugin-${pluginName}`);
      break;
  }

  const result = Object.assign({}, rules);

  if (plugin.rules) {
    Object.keys(plugin.rules).forEach((ruleName) => {
      result[`${pluginName}/${ruleName}`] = plugin.rules[ruleName];
    });
  }

  return result;
}, {});
