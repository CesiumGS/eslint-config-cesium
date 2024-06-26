"use strict";

const js = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");

const recommended = js.configs.recommended;

module.exports = {
    ...recommended,
    ...eslintConfigPrettier,
    name: "cesium/recommended-",
      rules: {
        ...recommended.rules,
        ...eslintConfigPrettier.rules,
        curly: "error",
        "block-scoped-var": "error",
        eqeqeq: "error",
        "guard-for-in": "error",
        "new-cap": ["error", { properties: false }],
        "no-alert": "error",
        "no-caller": "error",
        "no-console": "off",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-extend-native": "error",
        "no-extra-boolean-cast": "off",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-new": "error",
        "no-var": "error",
        "no-prototype-builtins": "off",
        "no-sequences": "error",
        "no-undef-init": "error",
        "no-restricted-globals": ["error", "fdescribe", "fit"],
        "no-unused-expressions": "error",
        "no-unused-vars": ["error", { vars: "all", args: "all" }],
        "no-useless-escape": "off",
        "no-use-before-define": ["error", "nofunc"],
        "prefer-const": "error",
        "prefer-template": "error",
        "require-atomic-updates": "off",
        strict: "error",
        "wrap-iife": ["error", "any"],
      },
  };
  