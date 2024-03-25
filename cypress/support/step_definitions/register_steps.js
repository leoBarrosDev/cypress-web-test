import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../pages/home_page.js'
import registerPage from '../pages/register_page.js'
import { faker } from '@faker-js/faker'

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password()
const invalidEmail = faker.internet.email().replace('@', '')
const invalidPassword = faker.string.alphanumeric(5)

Given("I'm on register page", () => {
    homePage.accessRegister()
})

Given("I fill the register e-mail", () => {
    registerPage.setEmail(email)
})

Given("I fill the register password", () => {
    registerPage.fillPassword(password)
})

When("I click on register button", () => {
    registerPage.saveRegister()
})

Then("I should see an error {string}", (message) => {
    registerPage.checkErrorMessage(message)
})