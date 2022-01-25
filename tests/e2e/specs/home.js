const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('Should render create account modal when click on cta create account button', () => {
    const token = window.localStorage.getItem('token')

    if (token) window.localStorage.removeItem('token')

    cy.visit(APP_URL)

    cy.get('#cta-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('Should render create account modal when click on header create account button', () => {
    cy.visit(APP_URL)

    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('Should render login modal when click on header login button', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')
  })

  it('Should render Feedback page on login modal submit', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-login').click()

    cy.url().should('include', '/feedbacks')
  })

  it('Should show an error when inputs an invalid email ', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@')

    cy.get('#email-error')
  })

  it('Should log out when click button sair', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-login').click()

    cy.url().should('include', '/feedbacks')

    cy.get('#logout-button').click()

    cy.url().should('include', '/')
  })
})
