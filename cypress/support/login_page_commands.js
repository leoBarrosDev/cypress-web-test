/// <reference types="cypress" />
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

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#user')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
        .type(password)
})

Cypress.Commands.add('toEnter', () => {
    cy.get('#btnLogin')
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