/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

/**
        * get() Pega elementos na página
        * contains() Verifica se o elemento contém o valor informado
        * find() Localiza elementos na página
        * as() - alias para o elemento"
        */

const emailError = "E-mail inválido."
const passwordError = "Senha inválida."
const successLogin = "Login realizado"
//const pattern = /^[a-zA-Z0-9&@#]{1,5}$/;

describe("Login", () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it("E-mail e senha válidos", () => {
        cy.fillEmail(faker.internet.email())
            .fillPassword(faker.string.alphanumeric(6))
            .toEnter()

        cy.loginSuccess(successLogin)
    })

    it("E-mail inválido e senha válida", () => {
        cy.fillEmail(faker.internet.email().replace("@", ""))
            .fillPassword(faker.internet.password())
            .toEnter()

        cy.checkErrorEmail(emailError)
    })

    it("E-mail válido e senha inválida", () => {
        cy.fillEmail(faker.internet.email())
            .fillPassword(faker.string.alphanumeric(5))
            .toEnter()

        cy.checkErrorPassword(passwordError)
    })
})