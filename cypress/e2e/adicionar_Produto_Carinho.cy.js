describe('Adicionar um produto no carrinho', () => {
    beforeEach(() => {
      //autenticação do usuário na plataforma
      cy.visit('https://www.saucedemo.com/v1/index.html'); //visita o site
      cy.get('input[data-test="username"]').type('standard_user'); //insere login válido
      cy.get('input[data-test="password"]').type('secret_sauce'); //insere senha válida
      cy.get('#login-button').click(); //clica no botao login
    });
  
    it('Validar adição de um produto no carrinho', () => {
      cy.get('.inventory_item').first().find('button').click(); //seleciona o primeiro item do inventário e simula clique
      cy.get('.shopping_cart_badge').should('contain', '1'); //valida se existe um item adicionado no carrinho
    });
  
    it('Validar multiplas adições de produtos no carrinho', () => {
      cy.get('.inventory_item').each(($multiplos_Produtos, i) => {
        if (i < 5) { //condicional para adicionar 5 produtos
          cy.wrap($multiplos_Produtos).find('button').click(); //empacota o elemento multiplos produtos e encontra o botão desse item e simular clique
        }
      });
      cy.get('.shopping_cart_badge').should('contain', '5'); //seleciona o item do carrinho e valida se exibe 5 produtos
    });

    it('Validar produtos dentro do carrinho', () => {
        cy.get('.inventory_item').first().find('button').click(); //seleciona o primeiro item do inventário e simula clique
        cy.get('.shopping_cart_badge').should('contain', '1'); //valida se existe um item adicionado no carrinho

      });

      it('Remove um item do carrinho', () => {
        cy.get('.inventory_item').first().find('button').click(); // Adicionar um item ao carrinho
        cy.get('.shopping_cart_badge').should('contain', '1'); // Verifica se o item foi adicionado    
        cy.get('.shopping_cart_link').click(); // Clicar no ícone do carrinho para visualizar os itens adicionados
        cy.get('.cart_item').should('have.length', 1); // Verificar se o item está no carrinho
        cy.get('.cart_item').first().find('button').click(); // Remover o item do carrinho
        cy.get('.cart_item').should('have.length', 0); // Verificar se o carrinho está vazio
        cy.get('.shopping_cart_badge').should('not.exist'); // Verifica se o badge do carrinho não existe
      });
  });
  