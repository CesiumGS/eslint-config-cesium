"use strict";

module.exports = {
  extends: ["./index.js", "plugin:n/recommended"],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
  },
  plugins: ["n"],
  rules: {
    "n/global-require": "error",
    "n/no-new-require": "error",
    "n/no-unsupported-features/node-builtins": "off",
    "n/no-process-exit": "off",
  },
};
