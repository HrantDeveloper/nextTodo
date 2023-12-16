import React from 'react'
import Important from './Important'

describe('<Important />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Important />)
  })
})