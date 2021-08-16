/// <reference types="cypress" />

describe('homePage',function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('check if home logo exists', function(){
        cy.get('#logo').should('exist')
    })
    
    it('check if user can return to home page', function(){
        cy.get('#logo').click()
        cy.get('.info').should('contain','The best learning methods')
    })

    it('homepage should have five menu', function(){
        cy.get('#menu').should('exist')
    })


    it('top five menu should stick at the top of the page', function(){
        cy.scrollTo('0%', '75%')
        cy.get('#menu').should('exist')
    })
    


    
    
    
    
    
})

