const APP_URL = process.env.APP_URL || 'http://localhost:8080/'

describe('Credentials', () => {
  it('Should render a corretcly credential page', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-login').click()

    cy.url().should('include', '/feedbacks')

    cy.get('#credential-button').click()

    cy.url().should('include', '/credentials')
  })
})
