describe("Cadastro", () => {

    it("Nome, e-mail e senhas válidos", () => {
        cy.visit('/register')
            .get('#user').type("Leandro Henrique de Barros Reis")
            .get('#email').type("leohbr@gmail.com")
            .get('#password').type("123456")
            .get('#btnRegister').click()
            .get('.swal2-popup').should('be.visible')
            .find('.swal2-title').should('have.text', 'Cadastro realizado!')
    })

    it("E-mail válido", () => {

    })

    it("Senha válida", () => {

    })
})