const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 50000,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }));
      return config;
    },
  },
});
