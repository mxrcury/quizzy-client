import Navbar from '../Navbar.vue'

const aboutUsTitleText = 'about us'

describe('Navbar', () => {
  it('renders github link with text "created by" ', () => {
    cy.mount(Navbar)

    cy.get('[data-cy=github]').should('contain.text', 'mxrcury')
    cy.get('[data-cy=createdBy]').should('contain.text', 'created by')
  })

  it('renders github link with text "created by" ', () => {
    cy.mount(Navbar)

    cy.get('[data-cy=logo]').should('contain.text', '&quizzy')
  })
})
