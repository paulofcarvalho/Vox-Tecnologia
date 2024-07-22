describe('Sauce Demo Tests', () => {
  it('should load the login page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input[data-test="username"]').should('be.visible');
  });
});
