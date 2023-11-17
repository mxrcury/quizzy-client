// https://on.cypress.io/api

describe('Quiz main page', () => {
  beforeEach(() => {
    cy.visit('/test', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('winOpen')
      }
    })
  })
  it('should visit the root url and contain text', () => {
    cy.contains('a', 'mxrcury')
  })

  it('should click on link of logo and redirect to bot', () => {
    cy.contains('a', '&quizzy')
    cy.get('[data-cy=logo]')
      .click()
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', 200)
      })
  })

  it('should click on link of profile and redirect to github', () => {
    cy.contains('a', 'mxrcury')
    cy.get('[data-cy=github]')
      .click()
      .then((link) => {
        cy.request(link.prop('href')).its('status').should('eq', 200)
      })
  })

  it('should vote for first variant and show result bar', () => {
    cy.get('[data-cy=btn]').each((item, i) => {
      if (i == 0) {
        item.click()
      }
    })
    cy.get('[data-cy=percentages]').should('be.visible', true)
  })
})
