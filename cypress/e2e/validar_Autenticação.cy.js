describe('Feat para autenticação do usuário ', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  //Teste login válido//
  it('Login com sucesso', () => {
    cy.get('input[data-test="username"]').type('standard_user'); //insere o nome do usuário correto
    cy.get('input[data-test="password"]').type('secret_sauce'); //insere a senha
    cy.get('#login-button').click(); //clica no botao login
    cy.url().should('include', '/inventory.html'); //valida se foi redirecionado com sucesso para página inventário
  });

   //Validar uppercase no login e na senha//
   it('Login utilizando letra maiuscula', () => {
    cy.get('input[data-test="username"]').type('Standard_user'); //insere o nome do usuário correto
    cy.get('input[data-test="password"]').type('Secret_sauce'); //insere a senha
    cy.get('#login-button').click(); //clica no botao login
  });

  //Teste login inválido - senha e usuário inconsistente
  it('Login sem sucesso', () => {
    cy.get('input[data-test="username"]').type('invalid_user');//insere usuário incorreto
    cy.get('input[data-test="password"]').type('invalid_password');//insere senha incorreta
    cy.get('#login-button').click(); //submete as informações
    cy.get('h3[data-test="error"]').should('be.visible'); //valida a mensagem de erro 
  });

  //Teste autenticação sem informar as credenciais obrigatórias
  it('Login sem sucesso - ausência de preenchimento', () => {
    cy.get('#login-button').click(); //validar o botão de enviar informações sem preencher usuário e senha
    cy.get('h3[data-test="error"]').should('be.visible'); //valida a mensagem de erro
  })
});