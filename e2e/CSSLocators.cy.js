describe('CSSLocators', ()=>{

    it("csslocators", ()=>{

        cy.visit("http://www.automationpractice.pl/index.php")
        // cy.get("#search_query_top").type("T-shirts") //id

        // cy.get(".search_query").type("T-shirts") //class

        cy.get("input.search_query[name=search_query]").type("T-shirts") //id

        cy.get("[name='submit_search']").click() //Attribute
        cy.get(".lighter").contains("T-shirt") //Assertion
        cy.get('.right-block > h5 > .product-name').click()
    })
})