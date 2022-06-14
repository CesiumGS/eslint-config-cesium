"use strict";

module.exports = {
  extends: "./index.js",
  env: {
    browser: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-implicit-globals": "error",
  },
};
