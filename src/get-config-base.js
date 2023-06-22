module.exports = () => ({
  parser: require.resolve('@babel/eslint-parser'),
  plugins: ['yola'],
  env: {
    browser: true,
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*-spec.js',
        '**/*-spec.jsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*-spec.ts',
        '**/*-spec.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
      env: {
        mocha: true,
        jest: true,
      },
      rules: {
        // Override `yola/import/no-extraneous-dependencies` rule for test files
        // that should use devDependencies
        'yola/import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      rules: {
        'dot-notation': 'off',
        'prefer-destructuring': 'off',
      },
    },
  ],
});
