module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  };