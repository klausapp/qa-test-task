// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'Login',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    headers: { 
      'Content-Type': 'application/json',
      'origin': 'https://app.klausapp-staging.com'
     },
    body: {
      client_id: Cypress.env('auth_client_id'),
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      credential_type: Cypress.env('credential_type')
    },
  };
  cy.request(options);
  });