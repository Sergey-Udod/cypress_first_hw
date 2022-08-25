/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Visit "Sign up" page', () => {
  beforeEach(() => {
  cy.visit('https://react-redux.realworld.io/#/register') //перевірка що користувач перейшов до зазначеної вебадреси
});

  it('should allow to register a new user', () => { //тест на введення в поле електронної адреси відповідно електронну пошту вже зареєстрованого юзера   
    const user = generateUser();

    cy.get('[placeholder="Username"]')
      .type(user.username)

    cy.get('[placeholder="Email"]')
      .type(user.email)

    cy.get('[placeholder="Password"]')
      .type(user.password)

    cy.get('.btn')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', user.username)
  });
});