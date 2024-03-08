/// <reference types="cypress" />

const user_data = require('../fixtures/user.json')

describe("Cadastro", () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it("Nome, e-mail e senhas válidos", () => {
        //const userName = "Leandro Henrique de Barros Reis";

        cy.get('#user').type(user_data.name)
            .get('#email').type(user_data.email)
            .get('#password').type(user_data.password)
            .get('#btnRegister').click()

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', "Cadastro realizado!")


        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('include.text', `Bem-vindo ${user_data.name}`)

    })

    it("Validar campo nome vazio", () => {

        cy.get('#email').type(user_data.email)
            .get('#password').type(user_data.password)
            .get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .and('have.text', "O campo nome deve ser prenchido")

    })

    it("Validar campo e-mail vazio", () => {

        cy.get('#user').type(user_data.name)
            .get('#password').type(user_data.password)
            .get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .and('have.text', "O campo e-mail deve ser prenchido corretamente")

    })

    it("Validar campo e-mail inválido", () => {
        cy.get('#user').type(user_data.name)
            .get('#email').type(user_data.invalidEmail)
            .get('#password').type(user_data.password)
            .get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .and('have.text', "O campo e-mail deve ser prenchido corretamente")
    })

    it("Validar campo senha inválido", () => {
        cy.get('#user').type(user_data.name)
            .get('#email').type(user_data.email)
            .get('#password').type(user_data.invalidPassword)
            .get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .and('have.text', "O campo senha deve ter pelo menos 6 dígitos")
    })
})