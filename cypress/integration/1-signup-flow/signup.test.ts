describe("Signup flow", () => {
  it("does not really do anything", () => {
    cy.visit("/sign-up");
    cy.contains("Picstagram");
    cy.contains("Sign up to see photos and videos from your friends");
  });
});
