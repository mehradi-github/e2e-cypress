
export class FormLayoutsPage{

    submitInlineFormWithNameAndEmail(name, email){
        cy.contains('nb-card', 'Inline form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name,{force: true})
            cy.wrap(form).find('[placeholder="Email"]').type(email,{force: true})
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

    submitBasicFormWithEmailAndPassword(email, password){
        cy.contains('nb-card', 'Basic form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email,{force: true})
            cy.wrap(form).find('[placeholder="Password"]').type(password,{force: true})
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

}

export const onFormLayoutsPage = new FormLayoutsPage()