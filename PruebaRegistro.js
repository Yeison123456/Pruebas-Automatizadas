it('Written with DeploySentinel Recorder', () => {   
    // Load "https://buggy.justtestit.org/register"   
    cy.visit('https://buggy.justtestit.org/register');   
    // // Resize window to 1536 x 774   
    cy.viewport(1536, 774);   
    // // Click on <input> #username   
    cy.get('#username').click();   
    // // Fill "rodriguez123" on <input> #username   
    cy.get('#username').type("rodriguez123");   
    // // Click on <input> #firstName   
    cy.get('#firstName').click();   
    // // Fill "Yeison" on <input> #firstName   
    cy.get('#firstName').type("Yeison");   
    // // Click on <input> #lastName   
    cy.get('#lastName').click();   
    // // Fill "Rodriguez" on <input> #lastName   
    cy.get('#lastName').type("Rodriguez");   
    // // Click on <input> #password   
    cy.get('#password').click();   
    // // Fill "Rodriguez" on <input> #password   
    cy.get('#password').type("Rodriguez");   
    // // Press @ on input   
    cy.get('#password').type('{@}');   
    // // Fill "Rodriguez@123" on <input> #password   
    cy.get('#password').type("Rodriguez@123");   
    // // Click on <input> #confirmPassword   
    cy.get('#confirmPassword').click();   
    // // Fill "Rodriguez" on <input> #confirmPassword   
    cy.get('#confirmPassword').type("Rodriguez");   
    // // Press @ on input   
    cy.get('#confirmPassword').type('{@}');
    // // Fill "Rodriguez@123" on <input> #confirmPassword   
    cy.get('#confirmPassword').type("Rodriguez@123");   
    // // Click on <button> "Register"   
    cy.get('.btn-default').click();   
    // // Scroll wheel by X:0, Y:92   
    cy.scrollTo(0, 301);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 301); 
});
    