import {
  clearUserAccounts,
  createCypressUser,
  cypressUserEmail,
} from "@cypress/support";

describe("Signup flow", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
    cy.get("#email-address").as("email");
    cy.get("#full-name").as("fullname");
    cy.get("#username").as("username");
    cy.get("#password").as("password");
    cy.get("[data-testid=submit]").as("submit");
  });

  afterEach(() => {
    clearUserAccounts();
  });

  it("allows user signup", () => {
    cy.contains("Picstagram");
    cy.contains("Sign up to see photos and videos from your friends");

    cy.get("@email").type("test@");
    cy.contains("Email must be a valid email");
    cy.get("@email").type("example.com");

    cy.contains("Full Name is a required field");
    cy.get("@fullname").type("Test User");

    cy.contains("User Name must be at least 3 characters");
    cy.get("@username").type("Testiculous");

    cy.contains("Password must be at least 6 characters");
    cy.get("@password").type("s3cr3tp@ss!");

    cy.get("@submit").click();

    cy.location("pathname").should("equal", "/");

    // TODO: this assertion will change and is temporary until the actual dashboard for logged in users is implemented
    cy.contains("Homepage for signed in user");
  });

  it("user can show/hide password", () => {
    cy.get("@password").should("have.attr", "type", "password");
    cy.get("@password").type("s3cr3tp@ss!");

    cy.get("[data-testid=password-reveal]").as("password-reveal");

    cy.get("@password-reveal").contains("Show").click();
    cy.get("@password").should("have.attr", "type", "text");

    cy.get("@password-reveal").contains("Hide").click();
    cy.get("@password").should("have.attr", "type", "password");
  });

  it("doesn't allow user sign up if the specified email is already in use", () => {
    createCypressUser();

    cy.get("@email").type(cypressUserEmail);
    cy.get("@fullname").type("Test User");
    cy.get("@username").type("Testiculous");
    cy.get("@password").type("s3cr3tp@ss!");
    cy.get("@submit").click();

    cy.contains("Email is already in use");
  });
});
