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
}

export default {
    fillName(name) {
        cy.get(elements.inputs.name)
            .type(name)
    },
    fillEmail(email) {
        cy.get(elements.inputs.name)
            .type(email)
    },
    fillPassword(password) {
        cy.get(elements.inputs.password)
            .type(password)
    },

    // checkErrorMessage(message) {
    //     cy.get('#errorMessageFirstName')
    //         .should('be.visible')
    //         .should('have.text', message)
    // }
}