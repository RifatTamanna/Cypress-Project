/// <reference types="Cypress" />

describe("Check UI Elements", ()=>{
    it("Checking Radio Buttons", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // visibility of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // Selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('be.not.checked')
    })


    it("Checking check Boxes", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // visibility of the element
        cy.get("input#monday").should('be.visible')
        // Selecting single check box -monday
        cy.get("input#monday").check().should('be.checked')

        // Unselecting check box
        cy.get("input#monday").should('not.be.checked')

        // Selesct all check box
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // select first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


  
  
    })






})