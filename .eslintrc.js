module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true, // ✅ mendukung test, expect, beforeEach
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script',
  },
  globals: {
    __ENV: 'readonly', // ✅ untuk k6
  },
  rules: {
    'no-undef': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'eqeqeq': ['error', 'always'],
  },
};