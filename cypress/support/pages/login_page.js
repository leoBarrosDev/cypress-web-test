/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '#btnLogin',
    },
    inputs: {
        name: '#user',
        email: '#email',
        password: '#password',
    }
}

export default {



    fillEmail(email) {
        cy.get(elements.inputs.name)
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.inputs.password)
            .type(password)
    },

    toEnter() {
        cy.get(elements.buttons.login)
            .click()
    },

    loginSuccess(message) {
        cy.get('.swal2-title')
            .should('be.visible')
            .and('have.text', message)
    },

    checkErrorEmail(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)
    },

    checkErrorPassword(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)
    }
}