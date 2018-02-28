# eslint-plugin-yola

An eslint plugin to lint Yola's javascript.  
ES6 code style is based on [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript).

## Installation

Install eslint and plugin package with npm as development dependencies:

```
npm install --save-dev eslint eslint-plugin-yola
```

## Usage

There are two configurations available:

* **yola/base** - based on `eslint-config-airbnb-base` - used to lint ES6 code
* **yola/react** - based on `eslint-config-airbnb` - used to lint React components code

## Configuration

Create config file in the root of your project `.eslintrc.js` that extends `eslint-plugin-yola`:

```javascript
module.exports = { extends: 'plugin:yola/base' };
```

Note: configs are depend on eslint plugins `import`, `react`, `jsx-a11y`. In order to avoid usage conflicts, rules that extracted from these plugins are prefixed with `yola/`. So if you need to override some rules you must use prefix. eg override of `react/no-string-refs`

```javascript
module.exports = {
  extends: 'plugin:yola/react',
  rules: {
    'yola/react/no-string-refs': 'warn',
  },
};
```

## Run

With npm scripts:

```
"lint": "eslint ./src/**/*.js"
```

## FAQ

### Why eslint?

We were using jshint and found it too restrictive. We wanted to extend from other style guides.  
Another reason to have eslint is a JSX support.

### Why a plugin?

The plugin solves problem of shareable eslint configs that depend on eslint plugins, which described in https://github.com/eslint/eslint/issues/3458.  
Basically, to resolve eslint plugins dependencies this plugin wraps `eslint-config-airbnb`, `eslint-config-airbnb-base` rules with extracted rules from plugins.  
The approach was inspired by [eslint-plugin-react-app](https://github.com/mmazzarolo/eslint-plugin-react-app/)
