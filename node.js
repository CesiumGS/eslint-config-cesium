"use strict";

module.exports = {
  extends: ["./index.js", "plugin:node/recommended"],
  env: {
    node: true,
    es2020: true,
  },
  plugins: ["node"],
  rules: {
    "global-require": "error",
    "node/no-new-require": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "node/no-unsupported-features/node-builtins": "off",
  },
};
