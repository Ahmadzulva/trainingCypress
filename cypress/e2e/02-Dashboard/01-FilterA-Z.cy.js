describe("Menggunakan filter A-Z", () => {
  it("Menggunakan filter A-Z", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.get(".product_sort_container").select("za");
    cy.wait(3000);
    cy.get(".product_sort_container").select("az");
  });
});
