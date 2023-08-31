import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";

Given("I am in Google home page", () => {
    cy.visit("/");
});

When("I type in {string}", (text) => {
    cy.get("#APjFqb").type(`${text}`);
});

When("I click search button", () => {
    cy.get("div.FPdoLc.lJ9FBc > center > input.gNO89b").click();
});

Then("I accept the cookies", () => {
    cy.get("#L2AGLb > div").click();
});

Then("I should be redirected to the search page", () => {
    cy.get("#result-stats").should('be.visible');
});