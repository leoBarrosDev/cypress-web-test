/// <reference types="cypress" />


export default {
    accessLogin() {
        cy.visit('/')
            .get('#top_header')
            .should('be.visible')

        cy.get('.fa-user')
            .click()
    },

    accessRegister() {
        cy.visit('/')
        cy.get('#top_header')
            .should('be.visible')
            .get('.fa-lock')
            .click()
    }
}