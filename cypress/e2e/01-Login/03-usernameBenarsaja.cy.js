describe("Username benar password salah", () => {
  it("Passes", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#user-name").type(Cypress.env("usernameBenar"));
    cy.get("#password").type(Cypress.env("passwordSalah"));
    cy.get("#login-button").click();
    cy.wait(3000);
  });
});
