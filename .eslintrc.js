module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: [2, 2],
    "no-tabs": 0,
    "space-before-function-paren": false
  }
};