describe("Menambahkan 1 item ke cart", () => {
  it("Menambahkan 1 item ke cart", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.addOneCart(1);
    cy.checkCart();
    cy.ContinueCart(1);
    cy.addOneCart(2);
  });
});
