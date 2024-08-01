describe("Menggunakan filter High To Low", () => {
  it("Menggunakan filter High To Low", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.wait(3000);
    cy.get(".product_sort_container").select("hilo");
  });
});
