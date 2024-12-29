module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  singleAttributePerLine: true,
}
