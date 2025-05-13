it('Written with DeploySentinel Recorder', () => {   
    // Load "https://buggy.justtestit.org/register"   
    cy.visit('https://buggy.justtestit.org/register');   
    // // Resize window to 1536 x 774   
    cy.viewport(1536, 774);   
    // // Click on <input> [name="login"]   
    cy.get('[name="login"]').click();   
    // // Fill "Rodriguez123" on <input> [name="login"]   
    cy.get('[name="login"]').type("Rodriguez123");   
    // // Click on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').click();   
    // // Fill "Rodriguez" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Rodriguez");   
    // // Press @ on input   cy.get('.form-group:nth-child(1) > [name="password"]').type('{@}');   
    // // Fill "Rodriguez@123" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Rodriguez@123");   
    // // Click on <button> "Login"   cy.get('.btn-success').click();   
    // // Click on <input> [name="login"]   
    cy.get('[name="login"]').click();   
    // // Fill "rodriguez123" on <input> [name="login"]   
    cy.get('[name="login"]').type("rodriguez123");
    // // Click on <button> "Login"   
    cy.get('.btn-success').click();   
    // // Click on <a> "Buggy Rating"   
    cy.get('[href="/"]:nth-child(1)').click();   
    // // Scroll wheel by X:0, Y:258   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:-1   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:268   
    cy.scrollTo(0, 79);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 79);  
    // // Click on <a> [href="/make/ckl2phsabijs71623vk0"]   
    cy.get('[href="/make/ckl2phsabijs71623vk0"]').click();   
    // // Scroll wheel by X:0, Y:270   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:192   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:373   
    cy.scrollTo(0, 372);  
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 372);   
    // // Scroll wheel by X:0, Y:341   
    cy.scrollTo(0, 712);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 712);   
    // // Scroll wheel by X:0, Y:-1   
    cy.scrollTo(0, 712);   
    // // Click on <a> "Diablo"   
    cy.get('td:nth-child(2) > [href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vqg"]').click();   
    // // Scroll wheel by X:0, Y:503   
    cy.scrollTo(0, 503);   
    // // Scroll wheel by X:0, Y:-1   
    cy.scrollTo(0, 502);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 503);   
    // // Scroll wheel by X:0, Y:1   
    cy.scrollTo(0, 503);   
    // // Click on <button> "Vote!"   
    cy.get('.btn').click();   
    // // Scroll wheel by X:0, Y:55   
    cy.scrollTo(0, 646);   
    // // Scroll wheel by X:0, Y:-177   
    cy.scrollTo(0, 468);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 468);   
    // // Scroll wheel by X:0, Y:-146   
    cy.scrollTo(0, 323);   
    // // Scroll wheel by X:0, Y:3   
    cy.scrollTo(0, 326);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 326);   
    // // Scroll wheel by X:0, Y:-62   
    cy.scrollTo(0, 264);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 264);
    });