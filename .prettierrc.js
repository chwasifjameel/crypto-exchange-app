module.exports = {
  printWidth: 150,
  tabWidth: 1,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  jsxBracketSameLine: true,
  proseWrap: 'never',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
