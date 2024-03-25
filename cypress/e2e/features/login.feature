Feature: Valid login

    Me as a customer
    I want to access the application
    to make a purchase
@focus 
    Scenario: Error login with invalid email
        Given I'm on login page
        And I fill the login password
        When I click on login button
        Then I should see an error "E-mail inválido."

    Scenario: Error login with Invalid password
        Given I'm on login page
        And I fill the login e-mail
        When I click on login button
        Then I should see an error "Senha inválida."

    Scenario: Successful login with valid credentials
        Given I'm on login page
        And And I fill my credentials
        When I click on login button
        Then I see an message "Login realizado"