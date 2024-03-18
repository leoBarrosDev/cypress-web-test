/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import login_page from '../support/pages/login_page'


describe("Login", () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it("E-mail e senha válidos", () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword(faker.string.alphanumeric(6))
        login_page.toEnter()
        login_page.loginSuccess()
    })

    it("E-mail inválido e senha válida", () => {
        login_page.fillEmail(faker.internet.email().replace("@", ""))
        login_page.fillPassword(faker.internet.password())
        login_page.toEnter()
        login_page.checkErrorEmail()
    })

    it("E-mail válido e senha inválida", () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword(faker.string.alphanumeric(5))
        login_page.toEnter()
        login_page.checkErrorPassword()
    })
})