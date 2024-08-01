describe("Username salah password benar", () => {
  it("Passes", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#user-name").type(Cypress.env("usernameLocked"));
    cy.get("#password").type(Cypress.env("passwordBenar"));
    cy.get("#login-button").click();
    cy.wait(3000);
  });
});
