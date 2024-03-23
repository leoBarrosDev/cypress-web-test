/// <reference types="cypress" />


export default {
    accessLogin() {
        cy.visit('/')
            .get('#top_header')
            .should('be.visible')

        cy.get('.fa-user')
            .click()
    }
}