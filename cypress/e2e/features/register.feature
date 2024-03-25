Feature: Valid Register

    Me as a potential customer
    I want to register on the website
    to make a purchase

    Scenario: Error register with invalid name
        Given I'm on register page
        And I fill the e-mail register
        And I fill the password register
        When I click on register button
        Then I should see an error "O campo nome deve ser prenchido" on register

    Scenario: Error register with invalid e-mail
        Given I'm on register page
        And I fill the name register
        And I fill the password register
        When I click on register button
        Then I should see an error "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Error register with Invalid password
        Given I'm on register page
        And I fill the name register
        And I fill the e-mail register
        When I click on register button
        Then I should see an error "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Successful register with valid credentials
        Given I'm on register page
        And I fill my credentials register
        # And I fill the name register
        # And I fill the e-mail register
        # And I fill the password register
        When I click on register button
        Then I see an message "Cadastro realizado!" on register