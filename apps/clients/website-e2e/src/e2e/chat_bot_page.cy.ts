describe('Login and Chat Page', () => {
  it('Logs in and checks Chat page', () => {
    cy.visit('/dang-nhap');

    cy.get('input[name="username"]').type('user@gmail.com');
    cy.get('input[name="password"]').type('P@ssw0rd');
    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/dang-nhap');

    cy.visit('/hoi-dap');

    cy.get('input[type="text"][placeholder="Nhập câu hỏi của bạn..."]').should(
      'be.visible'
    );

    cy.get('button:contains("SendIcon")').should('be.visible');

    cy.visualSnapshot('Chat Page Results after Login');
  });
});
