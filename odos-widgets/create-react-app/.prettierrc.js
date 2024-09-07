module.exports = {
  endOfLine: "lf",
  quoteProps: "as-needed",
  trailingComma: "all",
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: false,
  jsxSingleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  useTabs: false,
  htmlWhitespaceSensitivity: "css",
  overrides: [
    {
      files: "*.yml",
      options: {
        singleQuote: true,
        tabWidth: 2,
      },
    },
  ],
};
