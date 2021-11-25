/**
 * DONE create cypress test user by making a request to firebase auth rest endpoint (use cypress.request)
 
 * DONE Test that user sign up is allowed via UI
 * Test that the right hint shows up
 * DONE Delete test user after test is complete
 * Test that user signup is not allowed if email is already in use
 * 
 */

let idToken: string;
const identityURL = Cypress.env("FIREBASE_AUTH_EMULATOR_IDENTITY_URL");
const accountsURL = Cypress.env("FIREBASE_AUTH_EMULATOR_ACCOUNTS_URL");
const apiKey = Cypress.env("FIREBASE_API_KEY");

const createCypressUser = () => {
  cy.request({
    method: "POST",
    url: `${identityURL}/accounts:signUp?key=${apiKey}`,
    body: {
      email: "cypress-user@example.com",
      password: "s3cr3tp@ss!",
    },
  }).then((response) => {
    idToken = response.body.idToken;
    expect(response.status).to.equal(200);
  });
};

const clearUserAccounts = () => {
  cy.request({
    method: "DELETE",
    url: accountsURL,
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
};

describe("Signup flow", () => {
  afterEach(() => {
    clearUserAccounts();
  });

  context("When valid values are provided", () => {
    it("allows user signup", () => {
      cy.visit("/sign-up");
      cy.contains("Picstagram");
      cy.contains("Sign up to see photos and videos from your friends");

      cy.get("#email-address").type("test@example.com");
      cy.get("#full-name").type("Test User");
      cy.get("#username").type("Testiculous");
      cy.get("#password").type("s3cr3tp@ss!");

      cy.get("[data-testid=submit]").click();

      cy.location("pathname").should("equal", "/");

      // TODO: this assertion will change and is temporary until the actual dashboard for logged in users is implemented
      cy.contains("Homepage for signed in user");
    });

    it("basic test", () => {
      cy.visit("/sign-up");
    });
  });
});
