describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfully loads title', () => {
    cy.contains('Página inicial');
  });
});

export {};
