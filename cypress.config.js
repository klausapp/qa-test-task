const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://app.klausapp-staging.com",
      "email": "klaus-test-automation+momo@klausapp-staging.com",
      "password": "Momo-T3stTask",
      setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
