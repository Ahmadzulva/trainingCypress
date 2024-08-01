describe("Checkout Barang ", () => {
  it("Checkout Barang", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.addOneCart(1);
    cy.addOneCart(2);
    cy.checkCart();
    cy.get(".cart_footer > .btn_action").click();
    cy.CheckoutInfo();
    cy.get(".btn_action").click();
  });
});
