module.exports = {
  extends: ['stylelint-config-recess-order'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['src/**/*.{astro,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-class-pattern': null,
    'prettier/prettier': true,
  },
  ignoreFiles: ['node_modules/*'],
}
