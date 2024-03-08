describe("Login", () => {

    it("E-mail e senha válidos", () => {
        cy.visit('/login')
            .get('#user').type("Leandro Henrique de Barros Reis")
            .get('#password').type("123456")
            .get('#btnLogin').click()

        /**
         * get() Pega elementos na página
         * contains() Verifica se o elemento contém o valor informado
         * find() Localiza elementos na página
         * as() - alias para o elemento
         */
    })

    it("E-mail inválido e senha válida", () => {

    })

    it("Senha inválida e e-mail válido", () => {

    })
})