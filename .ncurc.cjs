// @ts-check

const { defineConfig } = require('npm-check-updates');

module.exports = defineConfig({
  workspaces: true,
  mergeConfig: true,
  root: true,
  packageManager: "yarn",
  cooldown: packageName => (packageName.startsWith('@httpx') ? 0 : 3),
  reject: [
    // Cause v9 isn't yet supported
    "eslint",
    // Till eslint flat config in eslint v9 is mainstream
    "eslint-plugin-unicorn"
  ]
})
