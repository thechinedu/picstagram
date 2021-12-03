// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

const identityURL = Cypress.env("FIREBASE_AUTH_EMULATOR_IDENTITY_URL");
const accountsURL = Cypress.env("FIREBASE_AUTH_EMULATOR_ACCOUNTS_URL");
const apiKey = Cypress.env("FIREBASE_API_KEY");
export const cypressUserEmail = "cypress-user@example.com";

export const createCypressUser = () => {
  cy.request({
    method: "POST",
    url: `${identityURL}/accounts:signUp?key=${apiKey}`,
    body: {
      email: cypressUserEmail,
      password: "s3cr3tp@ss!",
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
};

export const clearUserAccounts = () => {
  cy.request({
    method: "DELETE",
    url: accountsURL,
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
};
