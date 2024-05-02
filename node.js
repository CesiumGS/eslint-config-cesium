"use strict";

const nodePlugin = require("eslint-plugin-n");
const baseConfig = require("./common.js");

const cjsConfig = nodePlugin.configs["flat/recommended-script"];

module.exports = {
  ...baseConfig,
  ...cjsConfig,
  name: "cesium/node",
  languageOptions: {
    ...cjsConfig.languageOptions,
    ecmaVersion: 2023,
  },
  rules: {
    ...baseConfig.rules,
    ...cjsConfig.rules,
    "n/global-require": "error",
    "n/no-new-require": "error",
    "n/no-unsupported-features/node-builtins": "off",
    "n/no-process-exit": "off",
  },
};
