module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier',
    'eslint:recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-syntax-jsx']
    },
    ecmaFeatures: {
      globalReturn: false,
      jsx: true
    },
    ecmaVersion: 'latest',
  },
  root: true,
  plugins: ['react', '@babel'],
  rules: {
    'react/prop-types': 'off',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-undef': 'off',
    'no-useless-escape': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
