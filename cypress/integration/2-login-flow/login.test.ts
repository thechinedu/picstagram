describe("Signup flow", () => {
  beforeEach(() => {
    cy.visit("/");
    createCypressUser();

    cy.get("#email-address").as("email");
    cy.get("#password").as("password");
    cy.get("[data-testid=submit]").as("submit");
  });

  after(() => {
    clearUserAccounts();
  });

  it("allows user login", () => {
    cy.contains("Picstagram");
    cy.contains("Sign up to see photos and videos from your friends");

    cy.get("@email").type(cypressUserEmail);
    cy.get("@password").type("s3cr3tp@ss!");

    cy.get("@submit").click();

    cy.location("pathname").should("equal", "/");

    // TODO: this assertion will change and is temporary until the actual dashboard for logged in users is implemented
    cy.contains("Homepage for signed in user");
  });

  it("doesn't allow user login if any of the given credentials are wrong", () => {
    cy.get("@email").type(cypressUserEmail);
    cy.get("@password").type("fake@pass!");

    cy.get("@submit").click();

    cy.contains("Invalid email or password. Please try again");

    cy.get("@email").type("non-existent@example.com");
    cy.get("@password").type("fake@pass!");

    cy.get("@submit").click();

    cy.contains("Invalid email or password. Please try again");
  });
});
