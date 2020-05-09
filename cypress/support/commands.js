// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@percy/cypress'
import { selectors} from '../support/selectors'
const { passwordPage } = selectors

Cypress.Commands.add('submitrequest', (language,specialcharacters) => {
    cy.get(passwordPage.selectLanguage).select(language)
    cy.get(passwordPage.specialCharacters).select(specialcharacters)
    cy.get(passwordPage.submitButton).click()
  })
