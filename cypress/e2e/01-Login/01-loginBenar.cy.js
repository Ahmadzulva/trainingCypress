describe("Login Benar", () => {
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#user-name").type(Cypress.env("usernameBenar"));
    cy.get("#password").type(Cypress.env("passwordBenar"));
    cy.get("#login-button").click();
    cy.wait(3000);
  });
});
