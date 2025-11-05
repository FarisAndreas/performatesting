import eslintPluginNode from 'eslint-plugin-node';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __ENV: 'readonly', // untuk k6
      },
    },
    plugins: {
      node: eslintPluginNode,
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      // tambahkan aturan lain sesuai kebutuhan
    },
  },
];