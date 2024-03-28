describe('xpathlocators', ()=>{
    it('Best Sellers', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//a[normalize-space()='Best Sellers']")
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)

    })

    it('Chained Xpath', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//a[normalize-space()='Best Sellers']")
        cy.xpath("//ul[@id='blockbestsellers']").xpath('./li').should('have.length',6)

    })
})