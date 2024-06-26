# Change Log

### 11.0.1 - 2024-05-20

- Fix inadvertent `globals` peer dependency version of `15.0.0` instead of `^15.0.0`.

### 11.0.0 - 2024-04-30

- Updated to [flat config files](https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs). `recommended`, `browser`, and `node` configurations are now accessible from the `config` object.
- `node` configuration have been updated to the new `sourceType` `commonjs` instead of `script`.
- Bump `eslint` peer dependency to `^9.0.0`
- Bump `eslint-plugin-n` peer dependency to `17.0.0`

### 10.0.2 - 2023-12-05

- Fix node configuration referring to deprecated eslint rules that were moved to `plugin/n`

### 10.0.1 - 2023-09-05

- Fix bad node configuration that was still relying on `eslint-plugin-node`.

### 10.0.0 - 2023-09-05

- Bump `eslint-config-prettier` peer dependency to `^9.0.0`.
- Switch from `eslint-plugin-node` to `eslint-plugin-n`, since it is maintained.

### 9.0.1 - 2023-01-26

- Update ECMA version for node configurations to 2023 to match Node 18 LTS.

### 9.0.0 - 2022-06-07

- Update ECMA version for all configurations to 2020
- Adds `prettier` to all configurations
- Adds `eslint-plugin-node/recommended` rules for Node configuration

### 8.0.1 - 2019-10-23

- [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins) should be disabled for both Node and Browser.

### 8.0.0 - 2019-10-23

- Update Browser ecmaVersion to '2015'.
- Update Browser to use ES6 modules by default.
- Disable default rule [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins) because it's not useful.
- Disable default rule [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates) because it generates false positives.

### 7.0.0 - 2019-05-03

- Update Node ecmaVersion to '2019'.
- Enable [no-tabs](https://eslint.org/docs/rules/no-tabs).
- Enabled [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals) for jasmine `fit` and `fdescribe`.

### 6.0.1 - 2019-01-23

- Allow ES6 global variables in Node.js code.

### 6.0.0 - 2018-05-01

- Upgrade to eslint 5.x and it's new default rules.
- Set ecmaVersion to 2017 for Node.js code.
- Enable [no-var](https://eslint.org/docs/rules/no-var) in Node.js code.
- Enable [prefer-const](https://eslint.org/docs/rules/prefer-const) in Node.js code.

### 5.0.0 - 2018-05-01

- Enable [eol-last](https://eslint.org/docs/rules/eol-last).

### 4.0.0 - 2018-03-05

- Enable [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines).

### 3.0.0 - 2017-11-12

- Set default `ecmaVersion` to 6 for Node.js.
- Enable [comma-dangle](https://eslint.org/docs/rules/comma-dangle).

### 2.0.1 - 2017-06-28

- Remove [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html) peerDependency from `browser` config.

### 2.0.0 - 2017-06-27

- Enable [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal).
- Enable [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define).
- Enable [no-else-return](http://eslint.org/docs/rules/no-else-return).
- Enable [no-alert](http://eslint.org/docs/rules/no-alert).
- Enable [no-loop-func](http://eslint.org/docs/rules/no-loop-func).
- Enable [no-undef-init](http://eslint.org/docs/rules/no-undef-init).
- Enable [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals).
- Enable [quotes](http://eslint.org/docs/rules/quotes) to enforce use of single quotes.
- Enable [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces).
- Enable [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if).
- Enable [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions).
- Enable [no-sequences](http://eslint.org/docs/rules/no-lonely-if).
- Enable [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var).
- Enable Node-specific rules:
  - [global-require](http://eslint.org/docs/rules/global-require)
  - [no-buffer-constructor](http://eslint.org/docs/rules/no-buffer-constructor)
  - [no-new-require](http://eslint.org/docs/rules/no-new-require)

### 1.0.0 - 2017-06-12

- Initial release.
