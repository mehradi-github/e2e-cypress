const selectGroupMenuItem=(groupName)=>{
    cy.contains('a', groupName).then( menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
            if( attr.includes('left')){
                cy.wrap(menu).click({force: true})
            }
        })
    })
}
export class NavigationPage {

    formLayoutsPage(){
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click({force: true})
    }

    datepickerPage(){
        selectGroupMenuItem('Form')
        cy.contains('Datepicker').click({force: true})
    }

    toasterPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click({force: true})
    }

    smartTablePage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click({force: true})
    }

    tooltipPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click({force: true})
    }
}
export const navigateTo = new NavigationPage();