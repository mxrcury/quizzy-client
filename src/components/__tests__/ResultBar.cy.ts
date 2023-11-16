import ResultBar from '../ResultBar.vue'

const testPercentages = 30

describe('ResultBar', () => {
  it('should render ResultBar with certain percentages', () => {
    cy.mount(ResultBar, { props: { percentage: testPercentages } })

    cy.get('[data-cy=percentages]').should('contain.text', `${testPercentages}%`)
  })
})
