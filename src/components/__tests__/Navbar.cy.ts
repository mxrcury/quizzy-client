import Navbar from '../Navbar.vue'

const aboutUsTitleText = 'about us'

describe('Navbar', () => {
  it.skip('renders link with text "about us"', () => {
    cy.mount(Navbar)
    cy.get('p').should('contain', aboutUsTitleText)
  })
})
