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
    // messages: {
    //     emailError: "E-mail inválido.",
    //     passwordError: "Senha inválida.",
    //     successLogin: "Login realizado",
    // }
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
            .should('be.visible')
            .click()
    },

    checkErrorMessage(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .and('have.text', message)
    },

    successLogin(message) {
        cy.get('#swal2-title')
            .should('be.visible')
            .and('have.text', message)
    }
}

