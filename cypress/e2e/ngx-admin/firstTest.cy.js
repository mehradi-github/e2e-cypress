/// <reference types="cypress"/>

describe('our first suite',()=>{
   it('first test', async ()=>{
       cy.visit('http://localhost:4200/');
       cy.contains('Form').click();
       cy.contains('Form Layouts').click();

       
        //by Tag Name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')
   });

   it('second test', async ()=>{
      cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
   });


   it('then and wrap methods', async ()=>{
      cy.visit('http://localhost:4200/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      cy.contains('nb-card', 'Using the Grid').then( firstForm => {
         const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
         const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
         expect(emailLabelFirst).to.equal('Email')
         expect(passwordLabelFirst).to.equal('Password')

         cy.contains('nb-card', 'Basic form').then( secondForm => {
             const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
             expect(passwordLabelFirst).to.equal(passwordSecondText)

             cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

         })
     })
   });


   it('invoke command', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.get('[for="exampleInputEmail1"]')
        .should('contain', 'Email address')
        .should('have.class', 'label')
        .and('have.text', 'Email address')

    cy.get('[for="exampleInputEmail1"]').then( label => {
        expect(label.text()).to.equal('Email address')
        expect(label).to.have.class('label')
        expect(label).to.have.text('Email address')
    })

    cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
        expect(text).to.equal('Email address')
    })

    cy.contains('nb-card', 'Basic form')
        .find('nb-checkbox')
        .click()
        .find('.custom-checkbox')
        .invoke('attr', 'class')
        .then(classValue => {
            expect(classValue).to.contain('checked')
        })

    });




    it('radio button', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({force: true})
                .should('be.checked')

            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true})
                
            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')
                
            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled')    
        })
    })

});