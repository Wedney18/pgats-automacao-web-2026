/// <reference types="cypress" />
import {
    deleteAccount,
    loginUser,
    logoutUser,
    addProductsAndOpenCheckout,
    placeOrder,
    registerUser,
    searchProducts,
    startSignup,
    subscribeToNewsletter,
    verifyProductDetails
} from '../../support/automation-exercise'

describe('Automation Exercise', () => {
    it('Caso de Teste 01: Registrar Usuário', () => {
        const email = `jubileu.silva${Date.now()}@mail.com`

        registerUser(email)
        deleteAccount()
    })

    it('Caso de Teste 02: Login com email e senha corretos', () => {
        const email = `jubileu.silva${Date.now()}@mail.com`

        registerUser(email)
        logoutUser()
        loginUser(email)

        cy.contains('Logged in as PGATS Aut').should('be.visible')

        deleteAccount()
    })

    it('Caso de Teste 03: Login com e-mail e senha incorretos', () => {
        loginUser(`invalid-${Date.now()}@mail.com`, 'senha-incorreta')

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Caso de Teste 04: Deslogar Usuário', () => {
        const email = `jubileu.silva-${Date.now()}@mail.com`

        registerUser(email)
        logoutUser()

        cy.url().should('include', '/login')
        cy.contains('Login to your account').should('be.visible')

        loginUser(email)
        deleteAccount()
    })

    it('Caso de Teste 05: Cadastrar um usuário com um endereço de email que já existe', () => {
        const email = `jubileu.silva${Date.now()}@mail.com`

        registerUser(email)
        logoutUser()
        startSignup(email)

        cy.contains('Email Address already exist!').should('be.visible')

        loginUser(email)
        deleteAccount()
    })

    it('Caso de Teste 08: Verificar todos os produtos e a página de detalhes do produto', () => {
        verifyProductDetails()
    })

    it('Caso de Teste 09: Pesquisar produtos', () => {
        searchProducts('top')
    })

    it('Caso de Teste 10: Verificar a inscrição na página inicial', () => {
        subscribeToNewsletter(`automation-${Date.now()}@mail.com`)
    })

    it('Caso de Teste 15: Fazer pedido registrando antes do checkout', () => {
        const email = `jubileu.silva-${Date.now()}@mail.com`

        registerUser(email)
        addProductsAndOpenCheckout()
        placeOrder()
        deleteAccount()
    })

    it('Caso de Teste 16: Fazer pedido entrando na conta antes do checkout', () => {
        const email = `jubileu.silva-${Date.now()}@mail.com`

        registerUser(email)
        logoutUser()
        loginUser(email)
        addProductsAndOpenCheckout()
        placeOrder()
        deleteAccount()
    })
});