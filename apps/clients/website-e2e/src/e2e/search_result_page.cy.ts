describe('Search Result Page', () => {
  it('Loads Search Result page and performs search', () => {
    cy.visit('/thu-tuc-hanh-chinh');

    cy.get('nav[aria-label="breadcrumb"]').should('be.visible');

    cy.get('input[placeholder="Nhập từ khoá tìm kiếm"]').should('be.visible');

    cy.get('button:contains("Tìm kiếm")')
      .should('be.visible')
      .should('not.be.disabled');

    cy.get('input[placeholder="Nhập từ khoá tìm kiếm"]').type(
      'Phòng chống tham nhũng'
    );
    cy.get('button:contains("Tìm kiếm")').click();

    cy.visualSnapshot('SearchResult Page Results');
  });
});
