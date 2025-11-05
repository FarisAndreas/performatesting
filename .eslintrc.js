const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

// Initialize with the necessary configurations
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  eslintrc: true
});

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    __ENV: 'readonly',
  },
  rules: {
    // Tambahkan aturan khusus jika perlu
  },
};
  js.configs.recommended,
  ...compat.config({
    env: { 
      es2021: true, 
      node: true, 
      jest: true 
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off",
      "eqeqeq": ["error", "always"]
    }
  })
];