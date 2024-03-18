/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import register_page from '../support/pages/register_page'

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
        register_page.fillName(name)
        register_page.preencheEmail(email)
        register_page.fillPassword(password)
        register_page.saveRegister()
    })

    it("Validar campo nome vazio", () => {
        register_page.preencheEmail(email)
        register_page.fillPassword(password)
        register_page.saveErrorName()
    })

    it("Validar campo e-mail vazio", () => {
        register_page.fillName(name)
        register_page.fillPassword(password)
        register_page.saveErrorEmail()
    })

    it("Validar campo e-mail inválido", () => {
        register_page.fillName(name)
        register_page.preencheEmail(invalidEmail)
        register_page.fillPassword(password)
        register_page.saveErrorEmail()
    })

    it("Validar campo password vazio", () => {
        register_page.fillName(name)
        register_page.preencheEmail(email)
        register_page.invalidPassword()
    })

    it("Validar campo senha inválido", () => {
        register_page.fillName(name)
        register_page.preencheEmail(email)
        register_page.fillPassword(invalidPassword)
        register_page.invalidPassword()
    })
})