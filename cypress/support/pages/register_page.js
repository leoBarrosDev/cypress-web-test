/// <reference types="cypress" />

export default {
    saveRegister() {
        cy.get('#btnRegister').click()
    },
    wellcomeMessage(message, name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', message)
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', "Bem-vindo " + name)
    },

    setEmail(email) {
        cy.get('#email')
            .clear()
            .type(email)
            .should('be.visible')
    },

    fillName(name) {
        cy.get('#user')
            .clear()
            .type(name)
            .should('be.visible')
    },

    fillPassword(password) {
        cy.get('#password')
            .clear()
            .type(password)
            .should('be.visible')
    },

    checkErrorMessageRegister(message) {
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .and('have.text', message)
    }
}
