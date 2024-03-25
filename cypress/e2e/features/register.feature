Feature: Valid Register

    Me as a potential customer
    I want to register on the website
    to make a purchase

    Scenario: Error register with invalid name
        Given I'm on register page
        And I fill the register e-mail
        And I fill the register password
        When I click on register button
        Then I should see an error "O campo nome deve ser prenchido"

# Scenario: Error register with invalid e-mail
#     Given I'm on register page
#     And I fill the "name"
#     And I fill the "password"
#     When I click on register button
#     Then I should see an error "O campo e-mail deve ser prenchido corretamente"

# Scenario: Error register with Invalid password
#     Given I'm on register page
#     And I fill the "name"
#     And I fill the "e-mail"
#     When I click on register button
#     Then I should see an error "O campo e-mail deve ser prenchido corretamente"

# Scenario: Successful register with valid credentials
#     Given I'm on register page
#     And I fill the "name"
#     And I fill the "e-mail"
#     And I fill the "password"
#     When I click on register button
#     Then I should see an error "O campo e-mail deve ser prenchido corretamente"