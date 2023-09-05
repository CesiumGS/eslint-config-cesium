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
    "global-require": "error",
    "n/no-new-require": "error",
    "n/no-unsupported-features/node-builtins": "off",
    "no-process-exit": "off",
  },
};
