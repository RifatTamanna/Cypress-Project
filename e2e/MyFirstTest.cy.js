describe('MyFirstTest', () => { 
    it('verify-title-positive', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
    })

    it('verify-title-negative', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM123')
    })

  })