module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  root: true,
  extends: [
    'prettier',
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/named': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
  },
};
