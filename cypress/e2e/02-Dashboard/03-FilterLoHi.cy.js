describe("Menggunakan filter Low To High", () => {
  it("Menggunakan filter Low To High", () => {
    cy.login(Cypress.env("usernameBenar"), Cypress.env("passwordBenar"));
    cy.wait(3000);
    cy.get(".product_sort_container").select("lohi");
  });
});
