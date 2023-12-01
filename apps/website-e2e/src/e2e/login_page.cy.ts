describe('Login Page', () => {
  it('Logs in successfully', () => {
    cy.visit('/dang-nhap');

    cy.get('input[name="username"]').type('your_valid_username');
    cy.get('input[name="password"]').type('your_valid_password');

    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/Welcome');

    cy.visualSnapshot('Login Page Results after Successful Login');
  });

  it('Displays validation error for invalid credentials', () => {
    cy.visit('/dang-nhap');

    cy.get('input[name="username"]').type('invalid_username');
    cy.get('input[name="password"]').type('invalid_password');

    cy.get('button[type="submit"]').click();

    cy.get('.text-japonica-700').should('be.visible').contains('Tên đăng nhập hoặc mật khẩu không đúng');

    cy.visualSnapshot('Login Page Results with Validation Error');
  });
});
