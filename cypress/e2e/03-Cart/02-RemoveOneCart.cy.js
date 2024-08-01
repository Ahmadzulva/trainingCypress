describe("Menghapus 1 item dari cart", () => {
  it("Menghapus 1 item dari cart", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.addOneCart(1);
    cy.wait(3000);
    cy.removeOneCart(1);
  });
});
