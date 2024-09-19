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
  tailwindConfig: "./tailwind.config.ts",
  plugins: ["prettier-plugin-tailwindcss"],
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
