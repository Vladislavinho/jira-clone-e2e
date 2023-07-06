describe('Issue details editing', () => {
beforeEach(() => {
cy.visit('/');
cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
cy.visit(url + '/board');
cy.contains('This is an issue of type: Task.').click();
});
cy.get('[data-testid="modal:issue-details"]').should('be.visible')
});

  it('Delete issue', () => {
    //System finds modal for creating issue and does next steps inside of it
    cy.get('[data-testid="modal:issue-details"]').within(() => {

      //open issue type dropdown and choose Bug
      cy.get('[data-testid="select:type"]').click();
      cy.get('.sc-iqzUVk.cUBVJX').contains('Bug')
        .trigger('click');
      //Short summary
      cy.get('.sc-dxgOiQ').click();
      cy.get('.sc-dxgOiQ').type('Bug')
        .trigger('click');
      //Type value to description input field
      cy.get('.ql-editor').type('My bug description');

      //Priority of the bug
      cy.get('[data-testid="select:priority"]').click();
      cy.get('div.sc-iqzUVk.cUBVJX').contains('Highest')
        .trigger('click');
      //Select Pickle Rick from reporter dropdown
      cy.get('[data-testid="select:userIds"]').click();
      cy.get('[data-testid="select-option:Pickle Rick"]').click();

      //Click on button "Create issue"
      cy.get('button[type="submit"]').click();
    })
    cy.get('[data-testid="modal:issue-create"]').should('not.exist');
    cy.contains('Issue has been successfully created.').should('be.visible');

    //Reload the page to be able to see recently created issue
    //Assert that successful message has dissappeared after the reload
    cy.reload();
    cy.contains('Issue has been successfully created.').should('not.exist');

    //Assert than only one list with name AB is visible and do steps inside of it
    cy.get('[data-testid="board-list:backlog').should('be.visible').and('have.length', '1').within(() => {
      //Assert that this list contains 5 issues and first element with tag p has specified text
      cy.get('[data-testid="list-issue"]')
        .should('have.length', '5')
        .first()
        .find('p')
        .contains('Bug');
      //Assert that correct avatar and type icon are visible
      cy.get('[data-testid="avatar:Lord Gaben"]').should('be.visible');
      cy.get('[data-testid="icon:story"]').should('be.visible');

    })
  })

  cy.pause 
  it('Should create an issue and validate it successfully', () => {
    //System finds modal for creating issue and does next steps inside of it
    cy.get('[data-testid="modal:issue-create"]').within(() => {

      //open issue type dropdown and choose Story
      cy.get('[data-testid="select:type"]').click();
      cy.get('[data-testid="select-option:Story"]')
        .trigger('click');

      //Type value to description input field
      cy.get('.ql-editor').type('TEST_DESCRIPTION');

      //Type value to title input field
      //Order of filling in the fields is first description, then title on purpose
      //Otherwise filling title first sometimes doesn't work due to web page implementation
      cy.get('input[name="title"]').type('TEST_TITLE');

      //Select Lord Gaben from reporter dropdown
      cy.get('[data-testid="select:userIds"]').click();
      cy.get('[data-testid="select-option:Lord Gaben"]').click();

      //Click on button "Create issue"
      cy.get('button[type="submit"]').click();
    });
    //Assert that modal window is closed and successful message is visible
    cy.get('[data-testid="modal:issue-create"]').should('not.exist');
    cy.contains('Issue has been successfully created.').should('be.visible');

    //Reload the page to be able to see recently created issue
    //Assert that successful message has dissappeared after the reload
    cy.reload();
    cy.contains('Issue has been successfully created.').should('not.exist');

    //Assert than only one list with name Backlog is visible and do steps inside of it
    cy.get('[data-testid="board-list:backlog').should('be.visible').and('have.length', '1').within(() => {
      //Assert that this list contains 5 issues and first element with tag p has specified text
      cy.get('[data-testid="list-issue"]')
        .should('have.length', '5')
        .first()
        .find('p')
        .contains('TEST_TITLE');
      //Assert that correct avatar and type icon are visible
      cy.get('[data-testid="avatar:Lord Gaben"]').should('be.visible');
      cy.get('[data-testid="icon:story"]').should('be.visible');
    });
  });
cy.pause
  it('Should validate title is required field if missing', () => {
    //System finds modal for creating issue and does next steps inside of it
    cy.get('[data-testid="modal:issue-create"]').within(() => {
      //Try to click create issue button without filling any data
      cy.get('button[type="submit"]').click();
      //Assert that correct error message is visible
      cy.get('.sc-gisBJw.hyXJaC').should('contain', 'This field is required');
    });
  });

  it('My task 2 Part 2 creating new issue', () => {
    //System finds modal for creating issue and does next steps inside of it
    cy.get('[data-testid="modal:issue-create"]').within(() => {
      //Short summary
      cy.get('.sc-dxgOiQ').click();
      cy.get('.sc-dxgOiQ').type('Broner')
        .trigger('click');
      //Type value to description input field
      cy.get('.ql-editor').type('My boxing record');
      //Choose Task type
      cy.get('[data-testid="select:type"]').click();
      cy.get('.sc-iqzUVk.cUBVJX').contains('Task')
        .trigger('click');
      //Priority of the bug
      cy.get('[data-testid="select:priority"]').click();
      cy.get('div.sc-iqzUVk.cUBVJX').contains('Low')
        .trigger('click');
      //Select Baby Yoda from reporter dropdown
      cy.get('[data-testid="select:userIds"]').click();
      cy.get('[data-testid="select-option:Baby Yoda"]').click();

      //Click on button "Create issue"
      cy.get('button[type="submit"]').click();
    })
    cy.get('[data-testid="modal:issue-create"]').should('not.exist');
    cy.contains('Issue has been successfully created.').should('be.visible');

    //Reload the page to be able to see recently created issue
    //Assert that successful message has dissappeared after the reload
    cy.reload();
    cy.contains('Issue has been successfully created.').should('not.exist');

    //Assert than only one list with name AB is visible and do steps inside of it
    //Assert that this list contains 5 issues and first element with tag p has specified text
    cy.get('[data-testid="board-list:backlog').should('be.visible').and('have.length', '1').within(() => {
      //Assert that this list contains 5 issues and first element with tag p has specified text
      cy.get('[data-testid="list-issue"]')
        .should('have.length', '5')
        .first()
        .find('p')
        .contains('er');
      //Assert that correct avatar and type icon are visible
      cy.get('[data-testid="avatar:Lord Gaben"]').should('be.visible');
      cy.get('[data-testid="icon:story"]').should('be.visible');

    })
  })





});
