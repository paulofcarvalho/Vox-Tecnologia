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

  //Teste login inválido - senha e usuário inconsistente
  it('Login sem sucesso', () => {
    cy.get('input[data-test="username"]').type('invalid_user');
    cy.get('input[data-test="password"]').type('invalid_password');
    cy.get('#login-button').click();
    cy.get('h3[data-test="error"]').should('be.visible');
  });

  //Teste autenticação sem informar as credenciais obrigatórias
  it('Login sem sucesso - ausência de preenchimento', () => {
    cy.get('#login-button').click();
    cy.get('h3[data-test="error"]').should('be.visible');
  })
});