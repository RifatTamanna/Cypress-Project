
describe("Assertions Deno", ()=>{
    it("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // should and

        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')
    
        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')
    
        // cy.url().should('include','orangehrmlive.com')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain','orangehrm')
    
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath("//a").should('have.length','5')
        
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin') //value check

    })



    it("Explicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

       
        let expName="ABC";
        cy.get(".oxd-userdropdown-name").then( (x)=> {
            let actName=x.text()

             // BDD Approch
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            // TDD Approach
            assert.equal(actName,expName)
            assert.notequal(actName,expName)

        })


    })
})