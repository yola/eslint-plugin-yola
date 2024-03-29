'use strict';

const pkg = require('../package.json');
const reduce = require('lodash/reduce');

module.exports = reduce(
  pkg.dependencies,
  (plugins, version, dependency) => {
    if (dependency.indexOf('eslint-plugin') === 0) {
      plugins.push(dependency.replace('eslint-plugin-', ''));
    } else if (dependency === '@typescript-eslint/eslint-plugin') {
      plugins.push('@typescript-eslint');
    }

    return plugins;
  },
  []
);
