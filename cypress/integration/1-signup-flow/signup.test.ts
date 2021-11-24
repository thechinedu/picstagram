/**
 * create cypress test user by making a request to firebase auth rest endpoint (use cypress.request)
 
 * Test that user sign up is allowed via UI
 * Test that the right hint shows up
 * Delete test user after test is complete
 * Test that user signup is not allowed if email is already in use
 * 
 */

describe("Signup flow", () => {
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
  });
});
