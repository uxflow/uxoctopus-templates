module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'indentation': "tab",
    'block-no-empty': null,
    'color-hex-case': 'upper',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['layer', 'extends', 'tailwind'],
    }],
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: ['layer', 'extends', 'tailwind'],
    }],
    'scss/selector-no-redundant-nesting-selector': null,
  }
}
