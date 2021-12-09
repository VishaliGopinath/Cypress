import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("A user opens the 24MX web page", () => {
  cy.visit("");
});

And("A user closes the coupon pop up", () => {
  cy.get(".NostoOverlayClose").click();
});

When("A user enter the search product {string}", (Product) => {
  cy.get("#search-tablet").type(Product);
});

And("A user searches for the product", () => {
  cy.get("#search-tablet").type("{enter}");
});

Then("A user will get the search result for the product", () => {
  cy.url().should("contains", "query=Helmet");
});

When("A user clicks on the Menu", () => {
  cy.get(".o-mobile-header__menu").click();
});

And("A user clicks on the Outlet", () => {
  cy.get(".qa-mobile-header-outlet").click();
});

Then("A user will be able to see discounted products at outlet", () => {
  cy.contains("40 - 90%");
});

And("A user clicks on the Motorcross Gear", () => {
  cy.get(
    ".o-navigation-mobile > :nth-child(1) > :nth-child(1) > a.ng-tns-c66-10"
  ).click();
});

And("A user clicks on the Bags section", () => {
  cy.get(
    ".m-navigation-mobile-sub-item > :nth-child(5) > a.ng-tns-c66-10"
  ).click();
});

Then("A user will be able to see all the available bags", () => {
  cy.contains("Brandit Canvas");
});

And("A user clicks on the Brands", () => {
  cy.get(".o-mobile-menu__icon-list > :nth-child(1) > a").click();
});

Then("A user will be able to see all the available brands", () => {
  cy.contains("Answer Racing");
});

And("A user clicks on the Order Status", () => {
  cy.get(".o-mobile-menu__icon-list > :nth-child(2) > a").click();
});

Then(
  "A user will be able to see the window requesting order information",
  () => {
    cy.contains("E-mail");
  }
);
