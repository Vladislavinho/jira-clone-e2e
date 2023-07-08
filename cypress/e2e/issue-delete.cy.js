describe('Issue details editing', () => {
beforeEach(() => {
cy.visit('/');
cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
cy.visit(url + '/board');
cy.contains('This is an issue of type: Task.').click();
});
cy.get('[data-testid="modal:issue-details"]').should('be.visible')
});

const OpenIssue = () => cy.get('[data-testid="modal:issue-details"]');
it('Delete issue', () => {
 OpenIssue()
 //Find and click on Delete button
 cy.get('[data-testid="icon:trash"]').click()
 cy.get('[data-testid="modal:confirm"]').should('be.visible');
 cy.get('[data-testid="modal:confirm"]').contains('Delete issue').click()
 cy.get('[data-testid="modal:confirm"]').should('not.exist')
 //Issue is not visible
 cy.contains('This is an issue of type: Task.').should('not.exist')
})
it.only('Delete issue', () => {
 OpenIssue()
 //Try to delete issue
 cy.get('[data-testid="icon:trash"]').click()
 cy.get('[data-testid="modal:confirm"]').should('be.visible');
 cy.get('[data-testid="modal:confirm"]').contains('Delete issue').click()
 //Click on Cancel button
 cy.get('[data-testid="modal:confirm"]').contains('Cancel').click()
 cy.get('[data-testid="modal:confirm"]').should('not.exist')
//Issue is visible
 cy.contains('This is an issue of type: Task.').should('exist')








})
})
