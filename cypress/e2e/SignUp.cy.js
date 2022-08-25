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

  });
});

//'test.user.qa.123@gmail.com'