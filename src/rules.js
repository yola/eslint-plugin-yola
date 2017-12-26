'use strict';

const pluginsDependencies = require('./plugins-dependencies');

module.exports = pluginsDependencies.reduce((rules, pluginName) => {
  const plugin = require(`eslint-plugin-${pluginName}`); // eslint-disable-line global-require, import/no-dynamic-require
  const result = Object.assign({}, rules);

  if (plugin.rules) {
    Object.keys(plugin.rules)
      .forEach((ruleName) => {
        result[`${pluginName}/${ruleName}`] = plugin.rules[ruleName];
      });
  }


  return result;
}, {});
