Feature: Login

Feature: Valid login
    Eu como um cliente
    Quero fazer login na aplicação
    Para consultar produtos

    Scenario: Logging in with valids email and password
        Given I'm on login page
        When I fill a valid email
        and I fill a valid password
        and I click in login button
        Then I can see a message "Exemplo de mensagem"


    Scenario: Logging with invalid email and valid password
        Given I'm on login page
        When I fill a invalid email
        and I fill a valid password
        and I click in login button
        Then I can see a message "Exemplo de mensagem"

    Scenario: Logging with valid email and invalid password
        Given I'm on login page
        When I fill a valid email
        and I fill a invalid password
        and I click in login button
        Then I can see a message "Exemplo de mensagem"

