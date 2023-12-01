describe('Registration Page', () => {
  it('Successfully registers a new user', () => {
    cy.visit('/dang-ky');

    cy.get('input[name="card"]').type('001082946357');
    cy.get('input[name="name"]').type('valid_name');
    cy.get('input[name="email"]').type('valid_email@gmail.com');
    cy.get('input[name="phone"]').type('0338527416');
    cy.get('input[name="address"]').type('valid_address');
    cy.get('input[name="password"]').type('valid_password');

    cy.get('button[type="submit"]').click();

    //cy.url().should('not.include', '/dang-ky');

    cy.visualSnapshot('Registration Page Result after Successful Registration');
  });
});