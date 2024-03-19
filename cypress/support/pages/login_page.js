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
    messages: {
        emailError: "E-mail inválido.",
        passwordError: "Senha inválida.",
        successLogin: "Login realizado",
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

    loginSuccess() {
        cy.get('#swal2-title')
            .should('be.visible')
            .and('have.text', elements.messages.successLogin)
    },

    checkErrorEmail() {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', elements.messages.emailError)
    },

    checkErrorPassword() {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', elements.messages.passwordError)
    }
}