import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../pages/home_page.js'
import loginPage from '../pages/login_page.js'
import { faker } from '@faker-js/faker'

const email = faker.internet.email()
const password = faker.internet.password()

// 3º passo: transformar os passos em ações

Given("I'm on login page", () => {
    homePage.accessLogin()
})

Given("I fill the password", () => {
    loginPage.fillPassword(password)
})

When("I click on login button", () => {
    loginPage.toEnter()
})

Then("I should see an error {string}", (message) => {
    loginPage.checkErrorMessage(message)
})

Given("I fill the e-mail", () => {
    loginPage.fillEmail(email)
})

Given("And I fill my credentials", () => {
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
})

Then("I see an message {string}", (message) => {
    loginPage.successLogin(message)
})