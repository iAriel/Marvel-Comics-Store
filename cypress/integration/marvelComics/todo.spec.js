/// <reference types="cypress" />

describe('Home Marvel Comics  application', () => {
    it('Shold return truewhen title component was correct', () =>{
        cy.visit('/')
        cy.contains('Marvel Comics').should('to.have.length', 1)
    })

    it('Shold open a modal', () =>{
        cy.visit('/')
        cy.get('[data-cy=modal-button0]').click()

        cy.get('[data-cy=modal]')
        cy.contains('Marvel Previews (2017)').should('to.have.length', 1)

        cy.get('[data-cy="buy-item"]').click()

        cy.get('[data-cy="close-modal"]').click()
        
    })

    it('should open the cart', () =>{
        cy.visit('/')
        cy.get('[data-cy="go-cart"]').click()
    })
    it('should buy a comic', () =>{
        cy.visit('/')

        cy.get('[data-cy=modal-button0]').click()

        cy.get('[data-cy=modal]')
        cy.contains('Marvel Previews (2017)').should('to.have.length', 1)

        cy.get('[data-cy="buy-item"]').click()

        cy.get('[data-cy="close-modal"]').click()

        cy.get('[data-cy="go-cart"]').click()

        cy.contains('Marvel Previews (2017)').should('to.have.length', 1)

        cy.get('[data-cy="cuopon"]').type('comicAmazing')
        cy.get('[data-cy="submit-cuopon"]').click()
    })
})