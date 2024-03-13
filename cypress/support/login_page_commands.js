/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '#btnLogin',
    },
    inputs:{
        name: '#user',
        email: '#email',
        password: '#password',
    },
    messages: {}
}

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.inputs.name)
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.inputs.password)
        .type(password)
})

Cypress.Commands.add('toEnter', () => {
    cy.get(elements.buttons.login)
        .click()
})

Cypress.Commands.add('loginSuccess', (message) => {
    cy.get('.swal2-title')
        .should('be.visible')
        .and('have.text', message)
})


Cypress.Commands.add('checkErrorEmail', (message) => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkErrorPassword', (message) => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', message)
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