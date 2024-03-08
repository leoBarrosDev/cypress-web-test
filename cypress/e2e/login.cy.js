/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("Login", () => {

    it("E-mail e senha válidos", () => {
        cy.visit('/login')
            .get('#user').type(faker.person.fullName())
            .get('#password').type(faker.internet.password())
            .get('#btnLogin').click()

        /**
         * get() Pega elementos na página
         * contains() Verifica se o elemento contém o valor informado
         * find() Localiza elementos na página
         * as() - alias para o elemento"
         */
    })

    it("E-mail inválido e senha válida", () => {

    })

    it("Senha inválida e e-mail válido", () => {

    })
})