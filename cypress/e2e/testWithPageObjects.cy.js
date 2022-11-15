/// <reference types="cypress"/>

import {navigateTo} from '../support/page-objects/navigationPage';
import { onFormLayoutsPage } from "../support/page-objects/formLayoutsPage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('should submit Inline and Basic form', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
     
    })
});