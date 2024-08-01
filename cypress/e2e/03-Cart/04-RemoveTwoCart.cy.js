describe("Menghapus 2 item dari cart", () => {
  it("Menghapus 2 item dari cart", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.addOneCart(1);
    cy.addOneCart(2);
    cy.wait(3000);
    cy.removeOneCart(1);
    cy.removeOneCart(2);
  });
});
