"use strict";

module.exports = {
  extends: "./index.js",
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-implicit-globals": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
  },
};
