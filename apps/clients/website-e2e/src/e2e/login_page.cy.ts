describe('Login Page', () => {
  it('Logs in successfully', () => {
    cy.visit('/dang-nhap');

    cy.get('input[name="username"]').type('nhan@gmail.com');
    cy.get('input[name="password"]').type('P@ssw0rd');

    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/');

    cy.visualSnapshot('Login Page Results after Successful Login');
  });

  it('Displays validation error for invalid credentials', () => {
    cy.visit('/dang-nhap');

    cy.get('input[name="username"]').type('nhan@gmail.com');
    cy.get('input[name="password"]').type('invalid_password');

    cy.get('button[type="submit"]').click();

    cy.get('.text-japonica-700')
      .should('be.visible')
      .contains('Tên đăng nhập hoặc mật khẩu không đúng');

    cy.visualSnapshot('Login Page Results with Validation Error');
  });
});
