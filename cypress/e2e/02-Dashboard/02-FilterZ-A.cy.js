describe("Menggunakan filter Z-A", () => {
  it("Menggunakan filter Z-A", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.wait(3000);
    cy.get(".product_sort_container").select("za");
  });
});
