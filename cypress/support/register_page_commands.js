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

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister')
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
        .type(password)
})

Cypress.Commands.add('checkMessageError', (message) => {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('successfully', (message) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('wellcomeMessage', (name) => {
    cy.get('#swal2-html-container')
        .should('be.visible')
        .and('include.text', `Bem-vindo ${name}`)
})