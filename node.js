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
    "node/no-unsupported-features/node-builtins": "off",
    "no-process-exit": "off",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
  },
};
