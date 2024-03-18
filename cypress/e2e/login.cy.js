/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import login_page from '../support/pages/login_page'

const emailError = "E-mail inválido."
const passwordError = "Senha inválida."
const successLogin = "Login realizado"
//const pattern = /^[a-zA-Z0-9&@#]{1,5}$/;

describe("Login", () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it("E-mail e senha válidos", () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword(faker.string.alphanumeric(6))
        login_page.toEnter()
        login_page.loginSuccess(successLogin)
    })

    it("E-mail inválido e senha válida", () => {
        login_page.fillEmail(faker.internet.email().replace("@", ""))
        login_page.fillPassword(faker.internet.password())
        login_page.toEnter()
        login_page.checkErrorEmail(emailError)
    })

    it("E-mail válido e senha inválida", () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword(faker.string.alphanumeric(5))
        login_page.toEnter()
        login_page.checkErrorPassword(passwordError)
    })
})