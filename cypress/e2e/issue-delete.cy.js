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
 cy.get('[data-testid="icon:trash"]').click()
  

  })


})
