describe('Search Page', () => {
  it('Loads search page and performs search', () => {
    cy.visit('/tra-cuu');

    cy.getBySel('input_search').should('be.visible');

    const searchKeyword = 'your-search-keyword';
    cy.getBySel('input_search').type(searchKeyword);

    cy.getBySel('search_button').should('be.visible').should('not.be.disabled');

    cy.getBySel('search_button').click();

    cy.visualSnapshot('Search Page Results');
  });
});