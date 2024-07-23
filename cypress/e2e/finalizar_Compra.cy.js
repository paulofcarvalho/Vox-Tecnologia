describe('Finalizar compra', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html'); //entrar no site
      cy.get('input[data-test="username"]').type('standard_user'); //informar o usuário
      cy.get('input[data-test="password"]').type('secret_sauce'); //informar a senha
      cy.get('#login-button').click();
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_link').click();
      cy.get('.btn_action').click();
    });
  
    it('Validar formulário de venda', () => {
      cy.get('input[data-test="firstName"]').type('John');
      cy.get('input[data-test="lastName"]').type('Doe');
      cy.get('input[data-test="postalCode"]').type('12345');
      cy.get('.btn_primary').click();
      cy.get('.btn_action').click();
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    });
  });
  