describe('Logging a run', () => {
    it('Displays the run on the calendar', () => {
        cy.visit('/');

        cy.get('[data-test="logNavButton"]')
            .click();

        cy.get('[data-test="runDate"]')
            .type('03/27/2019');

        cy.get('[data-test="runDistance"]')
            .type('2');

        cy.get('[data-test="runSubmitButton"]')
            .click();

        cy.get('[data-test="runDate"]')
            .should('have.value', '');

        cy.get('[data-test="runDistance"]')
            .should('have.value', '');

        cy.get('[data-test="dataNavButton"]')
            .click()

        cy.contains('03/27/2019');
    })
})