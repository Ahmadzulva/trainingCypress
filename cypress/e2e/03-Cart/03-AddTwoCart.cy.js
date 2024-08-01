describe("Menambahkan 2 item ke cart", () => {
  it("Menambahkan 2 item ke cart", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.addOneCart(1);
    cy.addOneCart(2);
    cy.checkCart();
  });
});
