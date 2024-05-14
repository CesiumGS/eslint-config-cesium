# eslint-config-cesium

The official [shareable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for the [Cesium](https://cesium.com/) ecosystem.

## Usage

We export three ESLint configurations.

### eslint-config-cesium default

This config contains basic Cesium syntax and style config, from which `browser` and `node` extend. Extends `@eslint/js` recommended rules and `eslint-config/prettier` with additional rules.

[`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files)

```js
import configCesium from "eslint-config-cesium";

exports default [
    // Apply recommended rules to all files
    configCesium.configs.recommended,
    // Apply recommended rules to JS files with an override
    {
        files: ["**/*.js"],
        rules: {
            ...configCesium.configs.recommended.rules,
            "no-unused-vars": "off"
        } 
    },
]
```

### eslint-config-cesium/browser

For use in browser environments.

[`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files)

```js
import configCesium from "eslint-config-cesium";

exports default [
    // Apply recommended rules to all files
    configCesium.configs.browser,
    // Apply recommended rules to JS files with an override
    {
        files: ["**/*.js"],
        ...configCesium.configs.browser,
        rules: {
            ...configCesium.configs.browser.rules,
            "no-unused-vars": "off"
        } 
    },
]
```

### eslint-config-cesium/node

For use in Node.js environments. Extends `plugin/n:recommended`

[`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files)

```js
import configCesium from "eslint-config-cesium";

exports default [
    // Apply recommended rules to all files
    configCesium.configs.node,
    // Apply recommended rules to JS files with an override
    {
        files: ["**/*.js"],
        ...configCesium.configs.node,
        rules: {
            ...configCesium.configs.node.rules,
            "no-unused-vars": "off"
        } 
    },
]
```