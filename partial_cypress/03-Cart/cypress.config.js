const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["cypress/e2e/03-Cart/*.cy.js"],
  },
});
