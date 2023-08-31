const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    env: {
      "TAGS": "not @ignore"
    },
    baseUrl: 'https://www.google.pt/',
    specPattern: "**/*.feature",

    // prefix async
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config
    }
  },
});
