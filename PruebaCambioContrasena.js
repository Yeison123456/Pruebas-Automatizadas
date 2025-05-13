it('Written with DeploySentinel Recorder', () => {   
    // Load "https://buggy.justtestit.org/register"   
    cy.visit('https://buggy.justtestit.org/register');   
    // // Resize window to 1536 x 774   
    cy.viewport(1536, 774);   
    // // Click on <input> [name="login"]   
    cy.get('[name="login"]').click();   
    // // Fill "rodriguez123" on <input> [name="login"]   
    cy.get('[name="login"]').type("rodriguez123");   
    // // Click on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').click();   
    // // Fill "Rodriguez" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Rodriguez");   
    // // Press @ on input   cy.get('.form-group:nth-child(1) > [name="password"]').type('{@}');   
    // // Fill "Rodriguez@123" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Rodriguez@123");   
    // // Click on <button> "Login"   
    cy.get('.btn-success').click();   
    // // Click on <a> "Profile"   
    cy.get('[href="/profile"]').click();   
    // // Scroll wheel by X:0, Y:324   
    cy.scrollTo(0, 324);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 324);   
    // // Scroll wheel by X:0, Y:2   
    cy.scrollTo(0, 326);   
    // // Click on <input> #currentPassword   
    cy.get('#currentPassword').click();   
    // // Fill "Rodriguez" on <input> #currentPassword   
    cy.get('#currentPassword').type("Rodriguez");   
    // // Press @ on input   
    cy.get('#currentPassword').type('{@}');   
    // // Fill "Rodriguez@123" on <input> #currentPassword   
    cy.get('#currentPassword').type("Rodriguez@123");
    // // Click on <input> #newPassword   
    cy.get('#newPassword').click();   
    // // Fill "Rodriguez" on <input> #newPassword   
    cy.get('#newPassword').type("Rodriguez");   
    // // Press @ on input   
    cy.get('#newPassword').type('{@}');   
    // // Fill "Rodriguez@1234" on <input> #newPassword   
    cy.get('#newPassword').type("Rodriguez@1234");   
    // // Click on <input> #newPasswordConfirmation   
    cy.get('#newPasswordConfirmation').click();   
    // // Fill "Rodriguez" on <input> #newPasswordConfirmation   
    cy.get('#newPasswordConfirmation').type("Rodriguez");   
    // // Press @ on input   
    cy.get('#newPasswordConfirmation').type('{@}');   
    // // Fill "Rodriguez@1234" on <input> #newPasswordConfirmation   
    cy.get('#newPasswordConfirmation').type("Rodriguez@1234");   
    // // Scroll wheel by X:0, Y:193   
    cy.scrollTo(0, 342);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 342);   
    // // Click on <button> "Save"   
    cy.get('.btn-default').click(); 
    });