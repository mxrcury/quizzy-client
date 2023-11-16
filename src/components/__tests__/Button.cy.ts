import Button from '../Button.vue'

const mockedCommonProps = {
  styles: 'mr-[2px]',
  txt: 'Cat'
}

describe('Buton', () => {
  beforeEach(() => {})
  it('should render button', () => {
    cy.mount(Button, { props: { vote: cy.stub(), ...mockedCommonProps } })
    cy.get('[data-cy=btn]').should('be.visible', true)
    cy.get('[data-cy=btn]').should('contain.text', 'Cat')
  })

  it('should perform vote function on click', () => {
    const mockedVote = cy.stub().as('vote')
    cy.mount(Button, { props: { vote: mockedVote, ...mockedCommonProps } })
    cy.get('[data-cy=btn]').should('be.visible', true)
    cy.get('[data-cy=btn]').click()
    cy.get('@vote').should('have.been.called')
  })
})
