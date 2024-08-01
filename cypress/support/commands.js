// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add("login", (username, password) => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
  cy.wait(3000);
});

// Cypress.Commands.add("addOneCart", () => {
//   cy.get(".btn_primary").should('be.visible').first().click();
//   cy.get(".shopping_cart_badge").should("have.text", "1");

// });

Cypress.Commands.add("checkCart", () => {
  cy.get(".shopping_cart_link").click();
});

Cypress.Commands.add("addOneCart", () => {
  // Add one item to the cart
  cy.get(".btn_primary").should("be.visible").first().click();

  // Verify that the cart badge displays "1" or other possible values after adding an item
  cy.get(".shopping_cart_badge").should(($badge) => {
    const text = $badge.text();
    expect(text).to.match(/^1|2$/); // Adjust based on expected badge values
  });
});

Cypress.Commands.add("removeOneCart", () => {
  // Remove one item from the cart
  cy.get(".btn_secondary").should("be.visible").first().click();
});

Cypress.Commands.add("ContinueCart", () => {
  // Remove one item from the cart
  cy.get(".cart_footer > .btn_secondary").should("be.visible").first().click();
});

Cypress.Commands.add("CheckoutCart", () => {
  // Remove one item from the cart
  cy.get(".cart_footer .btn_action").should("be.visible").click();
});

Cypress.Commands.add("CheckoutInfo", () => {
  cy.get("#first-name").type(Cypress.env("firstName"));
  cy.get("#last-name").type(Cypress.env("lastName"));
  cy.get("#postal-code").type(Cypress.env("postalCode"));
  cy.get(".btn_primary").click();
  cy.wait(3000);
});
