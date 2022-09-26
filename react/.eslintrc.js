module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      'tsconfig.json',
    ],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-bitwise': ['error', { allow: ['~'] }],
    'import/named': 'off',
    'import/export': 0,
    'react/no-danger': 'off',
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
      },
    }],
    'react/prop-types': 0,
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import-helpers/order-imports': ['warn', {
      newlinesBetween: 'always',
      groups: [
        '/^react/',
        'module',
        '/^@shared/',
        '/^@core/',
        '/^@modules/',
        '/^@configs/',
        '/^~/',
        ['parent', 'sibling', 'index'],
      ],
      alphabetize: { order: 'asc', ignoreCase: true },
    },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
        selector: 'variable',
      },
    ],
  },
};
