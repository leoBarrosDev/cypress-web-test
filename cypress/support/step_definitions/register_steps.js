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

Given("I fill the e-mail register", () => {
    registerPage.setEmail(email)
})

Given("I fill the password register", () => {
    registerPage.fillPassword(password)
})

When("I click on register button", () => {
    registerPage.saveRegister()
})

Then("I should see an error {string} on register", (message) => {
    registerPage.checkErrorMessageRegister(message)
})

Given("I fill my credentials register", () => {
    registerPage.fillName(name)
    registerPage.fillPassword(password)
    registerPage.setEmail(email)
})

Given("I fill the name register", () => {
    registerPage.fillName(name)
})

Then("I see an message {string} on register", (message) => {
    registerPage.wellcomeMessage(message, name)
})