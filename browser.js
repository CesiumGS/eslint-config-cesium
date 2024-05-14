"use strict";

const baseConfig = require("./common.js");
const globals = require("globals");

module.exports = {
  ...baseConfig,
  name: "cesium/browser",
  languageOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    globals: {
      ...globals.browser
    }
  },
  rules: {
    ...baseConfig.rules,
    "no-implicit-globals": "error",
  },
};
