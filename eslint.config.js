export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __ENV: 'readonly',
        require: 'readonly',
        process: 'readonly',
        module: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
  },
];