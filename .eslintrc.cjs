module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script',
  },
  globals: {
    __ENV: 'readonly',
  },
  rules: {
    'no-undef': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'eqeqeq': ['error', 'always'],
  },
  overrides: [
    {
      files: ['loadtest/**/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};