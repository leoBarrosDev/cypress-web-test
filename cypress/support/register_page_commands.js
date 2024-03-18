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

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.inputs.name)
        .type(name)
})

Cypress.Commands.add('preencheEmail', (email) => {
    cy.get(elements.inputs.email)
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.inputs.password)
        .type(password)
})

Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register).click()
    cy.get('.swal2-popup')
        .should('be.visible')
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', elements.messages.registerSuccess)

})


Cypress.Commands.add('wellcomeMessage', (name) => {
    cy.get('#swal2-html-container')
        .should('be.visible')
        .and('include.text', `Bem-vindo ${name}`)
})

Cypress.Commands.add('saveErrorName', () => {
    cy.get(elements.buttons.register).click()
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', elements.messages.errorName)

})

Cypress.Commands.add('saveErrorEmail', () => {
    cy.get(elements.buttons.register).click()
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', elements.messages.errorEmail)

})

Cypress.Commands.add('invalidName', () => {
    cy.get(elements.buttons.register).click()
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', elements.messages.errorName)

})

Cypress.Commands.add('invalidPassword', () => {
    cy.get(elements.buttons.register).click()
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', elements.messages.errorPassword)

})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })