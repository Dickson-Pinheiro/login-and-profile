import { faker } from '@faker-js/faker';

describe('login page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('base_url'))
  })

  it('The page should load correctly"', () => {
    cy.visit(Cypress.env('base_url'))
  })

  it('should change to the authenticated route when the credentials are valid', () => {
    cy.get('[data-cy="email-input"]').type(Cypress.env('valid_email'))
    cy.get('[data-cy="password-input"]').type(Cypress.env('valid_password'))
    cy.get('[data-cy="submit-login"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/profile')
    })
  })

  it('It should change to the authenticated route when the credentials are valid', () => {
    cy.get('[data-cy="email-input"]').type(Cypress.env('valid_email'))
    cy.get('[data-cy="password-input"]').type(Cypress.env('valid_password'))
    cy.get('[data-cy="submit-login"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/profile')
    })
  })

  it('It should return status code 200 when the credentials are valid.', () => {
    cy.intercept('POST', '/auth/login/').as('loginFetch');
    cy.get('[data-cy="email-input"]').type(Cypress.env('valid_email'))
    cy.get('[data-cy="password-input"]').type(Cypress.env('valid_password'))
    cy.get('[data-cy="submit-login"]').click()
    cy.wait('@loginFetch').then((interception) => {
        expect(interception.response?.statusCode).to.eq(200)
    })
  })

  it('It should include the access tokens in localStorage when the credentials are valid', () => {
    cy.intercept('POST', '/auth/login/').as('loginFetch');
    cy.get('[data-cy="email-input"]').type(Cypress.env('valid_email'))
    cy.get('[data-cy="password-input"]').type(Cypress.env('valid_password'))
    cy.get('[data-cy="submit-login"]').click()
    cy.wait('@loginFetch').then((_interception) => {
      cy.getAllLocalStorage().then((result) => {
        console.log(result)
        expect(result[Cypress.env('base_url')]).deep.keys(['access-token', 'refresh-token'])
      })
    })
  })

  it("It should remain on the same page if the e-mail is incorrect", () => {
    cy.get('[data-cy="email-input"]').type(faker.internet.email())
    cy.get('[data-cy="password-input"]').type(Cypress.env('valid_password'))
    cy.get('[data-cy="submit-login"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })

  it("It should remain on the same page if the password is incorrect", () => {
    cy.get('[data-cy="email-input"]').type(Cypress.env('valid_email'))
    cy.get('[data-cy="password-input"]').type(faker.internet.password())
    cy.get('[data-cy="submit-login"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })

})