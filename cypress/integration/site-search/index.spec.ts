describe('Docs website search', () => {
  let searchTerm = '';
  before(() => {
    // Start an XHR server with the built-in cypress utilities.
    cy.server();
    cy.route('**/**/page-data.json').as('pageDataResponse');
    cy.route('**/**/app-data.json').as('appDataResponse');
    cy.visit('/');
    // Wait for the JS assets to load since they are necessary for the search functionality.
    cy.wait(['@pageDataResponse', '@appDataResponse']);
  });

  beforeEach(() => {
    cy.server();
    cy.route({url: 'https://bh4d9od16a-dsn.algolia.net/1/indexes/*/**', method: 'POST'}).as('searchRequest');
  });

  beforeEach(() => {
    cy.get('[data-cy="paste-docs-search-input"]').as('searchInputEl');
  });

  'dsys'.split('').forEach(async (letter) => {
    await it(`should handle search new letter "${letter}"`, () => {
      cy.get('@searchInputEl').should('be.visible').click().should('have.focus').type(letter);

      searchTerm += letter;

      console.log({searchTerm, letter});

      cy.get('@searchInputEl').should('have.attr', 'value', searchTerm);

      cy.wait('@searchRequest');

      cy.get('[id*="algolia-autocomplete-listbox"]')
        .should('be.visible')
        .find('[role="option"]')
        .should('have.length.above', 0);
    });
  });
});
