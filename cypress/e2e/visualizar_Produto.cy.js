describe('Feat para visualizar um produto', () => {
    beforeEach(() => {
      //Autenticação do usuário
      cy.visit('https://www.saucedemo.com/v1/index.html'); //visita o site 
      cy.get('input[data-test="username"]').type('standard_user'); //insere o usuário válido
      cy.get('input[data-test="password"]').type('secret_sauce'); //insere uma senha válida
      cy.get('#login-button').click(); //envia a requisição para autenticar
    });

    //Validar se existe pelo menos um produto no catálogo de produtos
    it('Validar se a lista de produtos existe', () => {
      cy.url().should('include', '/inventory.html'); //validar url após logar no sistema
      cy.get('.inventory_item').should('have.length.greaterThan', 0); //valida se a lista de produtos é maior que zero
    });

    //Validar o comportamento de um produto ao ser clicado
    it('Validar se ao clicar no produto da mochila é exibido mais informações ', () => {
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_item').should('have.length.greaterThan', 0);
      cy.get('#item_4_img_link > .inventory_item_img').click();
    });
  });
  