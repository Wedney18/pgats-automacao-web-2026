function verificarSeCadastroFoiEfetuadoComSucesso
  cy.get('[data-qa="create-account"]').click()
  cy.get('[data-qa="account-created"]')
    .should('be.visible')
    .and('contain', 'Account Created!')

}

module.exports = {
  iniciarCadastro,
  preencherCadastro,
  verificarSeCadastroFoiEfetuadoComSucesso
}
