describe('Registration Page', () => {
  it('Successfully registers a new user', () => {
    cy.visit('/dang-ky');

    cy.get('input[name="card"]').type('123456789');
    cy.get('input[name="name"]').type('Nguyen Tri Bao Thang');
    cy.get('input[name="email"]').type('thang@gmail.com');
    cy.get('input[name="phone"]').type('0338527416');
    cy.get('input[name="address"]').type('Go Vap, Ho Chi Minh');
    cy.get('input[name="password"]').type('P@ssw0rd');

    cy.get('button[type="submit"]').click();

    cy.visualSnapshot('Registration Page Result after Successful Registration');
  });
});
