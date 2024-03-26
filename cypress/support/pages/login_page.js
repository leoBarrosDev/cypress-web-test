/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '#btnLogin',
    },
    inputs: {
        name: '#user',
        email: '#email',
        password: '#password',
    },
}

export default {
    toEnter() {
        cy.get(elements.buttons.login)
            .should('be.visible')
            .click()
    },
    successLogin(message, email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .and('have.text', message)

        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('have.text', "Olá, " + email)
    },

    fillCredentialsLogin(email, password) {
        cy.get(elements.inputs.name)
            .clear()
            .should('be.visible')
            .type(email)
        cy.get(elements.inputs.password)
            .clear()
            .should('be.visible')
            .type(password)
    },

    checkErrorMessageLogin(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .and('have.text', message)
    }


}

