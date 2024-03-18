/// <reference types="cypress" />

const elements = {
    buttons: {
        register: '#btnRegister',
    },
    inputs: {
        name: '#user',
        email: '#email',
        password: '#password',
    },
    messages: {
        registerSuccess: 'Cadastro realizado!',
        errorName: 'O campo nome deve ser prenchido',
        errorEmail: 'O campo e-mail deve ser prenchido corretamente',
        errorPassword: 'O campo senha deve ter pelo menos 6 dígitos'
    }
}

export default {
    fillName(name) {
        cy.get(elements.inputs.name)
            .type(name)
    },
    preencheEmail(email) {
        cy.get(elements.inputs.email)
            .type(email)
    },
    fillPassword(password) {
        cy.get(elements.inputs.password)
            .type(password)
    },
    saveRegister() {
        cy.get(elements.buttons.register).click()
    },
    wellcomeMessage() {
        cy.get(elements.messages.registerSuccess)
            .should('be.visible')
            .should('have.text', elements.messages.registerSuccess)
    },

    saveErrorName() {
        cy.get(elements.buttons.register).click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', elements.messages.errorName)
    },

    saveErrorEmail() {
        cy.get(elements.buttons.register).click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', elements.messages.errorEmail)
    },

    invalidName() {
        cy.get(elements.buttons.register).click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', elements.messages.errorName)
    },

    invalidPassword() {
        cy.get(elements.buttons.register).click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', elements.messages.errorPassword)
    }
}