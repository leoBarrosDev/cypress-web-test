/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

let name = faker.person.fullName()
let email = faker.internet.email()
let password = faker.string.alphanumeric(6)
let invalidPassword = faker.string.alphanumeric(5)
let invalidEmail = 'invalid@email'

describe("Cadastro", () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it("Nome, e-mail e senha válidos", () => {
        cy.fillName(name)
        cy.preencheEmail(email)
        cy.fillPassword(password)
        cy.saveRegister()

        // cy.wellcomeMessage(name)
    })

    it("Validar campo nome vazio", () => {
        cy.preencheEmail(email)
            .fillPassword(password)
            .saveErrorName()
    })

    it("Validar campo e-mail vazio", () => {
        cy.fillName(name)
            .fillPassword(password)
            .saveErrorEmail()
    })

    it("Validar campo e-mail inválido", () => {
        cy.fillName(name)
            .preencheEmail(invalidEmail)
            .fillPassword(password)
            .saveErrorEmail()
    })

    it("Validar campo password vazio", () => {
        cy.fillName(name)
            .preencheEmail(email)
            .invalidPassword()
    })

    it("Validar campo senha inválido", () => {
        cy.fillName(name)
            .preencheEmail(email)
            .fillPassword(invalidPassword)
            .invalidPassword()
    })
})