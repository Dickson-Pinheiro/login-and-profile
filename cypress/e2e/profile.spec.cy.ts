describe('profile page', () => {
    context('Authenticated access to the profile route', () => {
        beforeEach(() => {
            cy.visit(Cypress.env('base_url'))
            cy.get('[data-cy="email-input"]').type(Cypress.env('valid_email'))
            cy.get('[data-cy="password-input"]').type(Cypress.env('valid_password'))
            cy.get('[data-cy="submit-login"]').click()
        })

        it('It should be on the authenticated route.', () => {
            cy.location().should((loc) => {
                expect(loc.pathname).to.deep.equal('/profile')
            })
        })

        it('It should succeed when making the request to fetch user information.', () => {
            cy.intercept('GET', '/auth/profile/').as('profileFetch');
            cy.wait('@profileFetch').then((interception) => {
                expect(interception.response?.statusCode).to.be.eq(200)
            })
        })

        it('It should succeed when making the request to fetch user information.', () => {
            cy.intercept('GET', '/auth/profile/').as('profileFetch');
            cy.wait('@profileFetch').then((interception) => {
                expect(interception.response?.statusCode).to.be.eq(200)
            })
        })

        it("It should correctly display the user's name when accessing the profile page.", () => {
            cy.intercept('GET', '/auth/profile/').as('profileFetch');
            cy.wait('@profileFetch').then(() => {
                cy.get('[data-cy="display-name"]').contains(Cypress.env('valid_profile_name'))
            })
        })

        it("It should correctly display the user's e-mail when accessing the profile page.", () => {
            cy.intercept('GET', '/auth/profile/').as('profileFetch');
            cy.wait('@profileFetch').then(() => {
                cy.get('[data-cy="display-email"]').should('exist').contains(Cypress.env('valid_profile_email'))
            })
        })
    })

    context('Unauthenticated access to the profile route', () => {
        it('It should be redirected to the unauthenticated page when there are no valid tokens.', () => {
            cy.visit(`${Cypress.env('base_url')}/profile`)
            cy.location().should((loc) => {
                expect(loc.pathname).to.deep.equal('/')
            })
        })
    })
})  