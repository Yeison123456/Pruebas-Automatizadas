it('Written with DeploySentinel Recorder', () => {  
    // Load "https://buggy.justtestit.org/register"   
    cy.visit('https://buggy.justtestit.org/register');    
    // // Resize window to 1536 x 774   cy.viewport(1536, 774);   
    // // Click on <input> [name="login"]   
    cy.get('[name="login"]').click();   
    // // Fill "yeison123" on <input> [name="login"]   
    cy.get('[name="login"]').type("yeison123");   
    // // Click on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').click();   
    // 
    // // Fill "Yeison" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Yeison");   
    // // Press @ on input   
    cy.get('.form-group:nth-child(1) > [name="password"]').type('{@}');
    // // Fill "Yeison@123" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Yeison@123");   
    // // Press Enter on input   
    cy.get('.form-group:nth-child(1) > [name="password"]').type('{Enter}');
    });