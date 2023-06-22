module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'warn',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
  },
};
