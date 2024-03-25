/// <reference types="cypress" />

export default {
    saveRegister() {
        cy.get('#btnRegister').click()
    },
    wellcomeMessage(message) {
        cy.get("sucesso")
            .should('be.visible')
            .should('have.text', message)
    },
    // fillCredentials(name, email, password) {
    //     cy.fi
    // }
}
