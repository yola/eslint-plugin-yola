module.exports = () => ({
  parser: require.resolve('babel-eslint'),
  plugins: ['yola'],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: [
        '*-spec.js',
        '*-spec.jsx',
        '*.spec.js',
        '*.spec.jsx',
      ],
      env: {
        mocha: true,
      },
      rules: {
        // Override `import/no-extraneous-dependencies` rule for test files
        // that should use devDependencies
        'import/no-extraneous-dependencies': [
          'error',
          {
            'devDependencies': true,
          },
        ],
      },
    },
  ],
});
