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
    // // Fill "Rodriguez@1234" on <input> .form-group:nth-child(1) > [name="password"]   
    cy.get('.form-group:nth-child(1) > [name="password"]').type("Rodriguez@1234");   
    // // Click on <button> "Login"   
    cy.get('.btn-success').click();   
    // // Click on <a> "Buggy Rating"   
    cy.get('[href="/"]:nth-child(1)').click();   
    // // Scroll wheel by X:0, Y:472   
    cy.scrollTo(0, 79);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 79);   
    // // Click on <a> [href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vqg"]   
    cy.get('[href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vqg"]').click();   
    // // Scroll wheel by X:0, Y:669   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:404   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:512   
    cy.scrollTo(0, 500);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 500);   
    // // Scroll wheel by X:0, Y:402   
    cy.scrollTo(0, 902);   
    // // Scroll wheel by X:0, Y:-560   
    cy.scrollTo(0, 342);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 342);   
    // // Scroll wheel by X:0, Y:-247   
    cy.scrollTo(0, 95);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 95);   
    // // Scroll wheel by X:0, Y:-204   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:1   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Click on <a> "Buggy Rating"   
    cy.get('.container > [href="/"]').click();   
    // // Scroll wheel by X:0, Y:294   
    cy.scrollTo(0, 79);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 79);   
    // // Scroll wheel by X:0, Y:15   
    cy.scrollTo(0, 79);   
    // // Click on <a> [href="/make/ckl2phsabijs71623vk0"]   
    cy.get('[href="/make/ckl2phsabijs71623vk0"]').click();   
    // // Scroll wheel by X:0, Y:650   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:744   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:169   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:-2   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 0);   
    // // Scroll wheel by X:0, Y:665   
    cy.scrollTo(0, 664);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 664);   
    // // Scroll wheel by X:0, Y:627   
    cy.scrollTo(0, 1086);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 1086);   
    // // Scroll wheel by X:0, Y:1   
    cy.scrollTo(0, 1086);   
    // // Click on <a> "Veneno"   
    cy.get('td:nth-child(2) > [href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vng"]').click();   
    // // Scroll wheel by X:0, Y:388   
    cy.scrollTo(0, 388);   
    // // Scroll wheel by X:0, Y:-1   
    cy.scrollTo(0, 387);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 387);   
    // // Fill "Que gran carro" on <textarea> #comment   
    cy.get('#comment').type("Que gran carro");   
    // // Click on <button> "Vote!"   
    cy.get('.btn').click();   
    // // Scroll wheel by X:0, Y:-154   
    cy.scrollTo(0, 232);   
    // // Scroll wheel by X:0, Y:1   
    cy.scrollTo(0, 234);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 234);   
    // // Scroll wheel by X:0, Y:-88   
    cy.scrollTo(0, 146);   
    // // Scroll wheel by X:0, Y:19   
    cy.scrollTo(0, 164);   
    // // Scroll wheel by X:0, Y:-2   
    cy.scrollTo(0, 163);   
    // // Scroll wheel by X:0, Y:0   
    cy.scrollTo(0, 163);
     });