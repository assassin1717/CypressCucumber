const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.pt/',
    specPattern: "**/*.feature",

    // prefix async
    async setupNodeEvents(on, config) {
      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

      // await here
      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // return any mods to Cypress
      return config
    },
    "stepDefinitions": [
      "cypress/e2e/[filepath]/**/*.{js,ts}",
      "cypress/e2e/[filepath].{js,ts}",
      "cypress/support/step_definitions/**/*.{js,ts}",
    ]
  },
});
