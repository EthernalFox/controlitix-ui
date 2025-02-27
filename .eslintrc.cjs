module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    ".prettierrc.json",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@stylistic/eslint-plugin", "import", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "@stylistic/quote-props": ["error", "consistent-as-needed"],
    "@stylistic/key-spacing": [
      "error",
      { beforeColon: false, afterColon: true, mode: "strict" },
    ],
    "@stylistic/type-annotation-spacing": "error",
    "@stylistic/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "function", next: "*" },
    ],
    "@stylistic/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "max-len": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": ["error", { props: false }],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-first-prop-new-line": ["error", "multiprop"],
    "react/require-default-props": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "no-empty": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
