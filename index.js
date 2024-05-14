"use strict";

const baseConfig = require("./common.js");
const browserConfig = require("./browser.js")
const nodeConfig = require("./node.js");

module.exports = {
  configs: {
    recommended: baseConfig,
    browser: browserConfig,
    node: nodeConfig,
  }
}
