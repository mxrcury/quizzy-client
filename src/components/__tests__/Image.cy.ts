import Image from '../Image.vue'

describe('Image', () => {
  it('should render img', () => {
    cy.mount(Image, { props: { url: 'http:/test' } })

    cy.get('[data-cy=img]').should('be.visible', true)
  })
})
