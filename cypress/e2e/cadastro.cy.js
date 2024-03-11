/// <reference types="cypress" />

const registerSuccess = "Cadastro realizado!"
const user_data = require('../fixtures/user.json')
const errorName = "O campo nome deve ser prenchido"
const errorEmail = "O campo e-mail deve ser prenchido corretamente"
const errorPassword = "O campo senha deve ter pelo menos 6 dígitos"


describe("Cadastro", () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it("Nome, e-mail e senha válidos", () => {
        cy.fillName(user_data.name)
        cy.preencheEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.saveRegister()
        cy.successfully(registerSuccess)
        cy.wellcomeMessage(user_data.name)
    })

    it("Validar campo nome vazio", () => {
        cy.preencheEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.saveRegister()
        cy.checkMessageError(errorName)
    })

    it("Validar campo e-mail vazio", () => {
        cy.fillName(user_data.name)
        cy.fillPassword(user_data.password)
        cy.saveRegister()
        cy.checkMessageError(errorEmail)
    })

    it("Validar campo e-mail inválido", () => {
        cy.fillName(user_data.name)
        cy.preencheEmail(user_data.invalidEmail)
        cy.fillPassword(user_data.password)
        cy.saveRegister()
        cy.checkMessageError(errorEmail)
    })

    it("Validar campo senha inválido", () => {
        cy.fillName(user_data.name)
        cy.preencheEmail(user_data.email)
        cy.fillPassword(user_data.invalidPassword)
        cy.saveRegister()
        cy.checkMessageError(errorPassword)
    })
})