/// <reference types="cypress" />

describe('Automation Exercise', () => {
    const password = '12345'

    const openLoginPage = () => {
        cy.visit('https://www.automationexercise.com')
        cy.xpath('//a[contains(@href, "login")]').click()
    }

    const registerUser = (email) => {
        openLoginPage()
        cy.xpath('//*[@data-qa="signup-name"]').type('PGATS Aut')
        cy.xpath('//*[@data-qa="signup-email"]').type(email)
        cy.xpath('//*[@data-qa="signup-button"]').click()
        cy.xpath('//*[@id="id_gender2"]').check()
        cy.xpath('//*[@data-qa="password"]').type(password)
        cy.xpath('//*[@data-qa="days"]').select('1')
        cy.xpath('//*[@data-qa="months"]').select('September')
        cy.xpath('//*[@data-qa="years"]').select('1988')
        cy.xpath('//*[@id="newsletter"]').check()
        cy.xpath('//*[@id="optin"]').check()
        cy.xpath('//*[@data-qa="first_name"]').type('PGATS')
        cy.xpath('//*[@data-qa="last_name"]').type('Aut')
        cy.xpath('//*[@data-qa="company"]').type('PGATS')
        cy.xpath('//*[@data-qa="address"]').type('Example Address')
        cy.xpath('//*[@data-qa="country"]').select('United States')
        cy.xpath('//*[@data-qa="state"]').type('California')
        cy.xpath('//*[@data-qa="city"]').type('San Francisco')
        cy.xpath('//*[@data-qa="zipcode"]').type('12345')
        cy.xpath('//*[@data-qa="mobile_number"]').type('999999999')
        cy.xpath('//*[@data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible')
        cy.xpath('//*[@data-qa="continue-button"]').click()
        cy.contains('Logged in as PGATS Aut').should('be.visible')
    }

    it('Test Case 1: Register User', () => {
        const email = `jubileu.silva${Date.now()}@mail.com`

        registerUser(email)
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.xpath('//*[@data-qa="continue-button"]').click()
    })

    it('Test Case 2: Login User with correct email and password', () => {
        const email = `jubileu.silva${Date.now()}@mail.com`

        registerUser(email)
        cy.xpath('//a[contains(@href, "logout")]').click()
        openLoginPage()
        cy.xpath('//*[@data-qa="login-email"]').type(email)
        cy.xpath('//*[@data-qa="login-password"]').type(password)
        cy.xpath('//*[@data-qa="login-button"]').click()

        cy.contains('Logged in as PGATS Aut').should('be.visible')

        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.xpath('//*[@data-qa="continue-button"]').click()
    })

    it('Test Case 3: Login User with incorrect email and password', () => {
        openLoginPage()
        cy.xpath('//*[@data-qa="login-email"]').type(`invalid-${Date.now()}@mail.com`)
        cy.xpath('//*[@data-qa="login-password"]').type('senha-incorreta')
        cy.xpath('//*[@data-qa="login-button"]').click()

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Test Case 4: Logout User', () => {
        const email = `jubileu.silva-${Date.now()}@mail.com`

        registerUser(email)
        cy.xpath('//a[contains(@href, "logout")]').click()

        cy.url().should('include', '/login')
        cy.contains('Login to your account').should('be.visible')

        openLoginPage()
        cy.xpath('//*[@data-qa="login-email"]').type(email)
        cy.xpath('//*[@data-qa="login-password"]').type(password)
        cy.xpath('//*[@data-qa="login-button"]').click()
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.xpath('//*[@data-qa="continue-button"]').click()
    })

    it('Test Case 5: Register a user with an email address that is already on file', () => {
        const email = `jubileu.silva${Date.now()}@mail.com`

        registerUser(email)
        cy.xpath('//a[contains(@href, "logout")]').click()
        openLoginPage()
        cy.xpath('//*[@data-qa="signup-name"]').type('PGATS Aut')
        cy.xpath('//*[@data-qa="signup-email"]').type(email)
        cy.xpath('//*[@data-qa="signup-button"]').click()

        cy.contains('Email Address already exist!').should('be.visible')

        openLoginPage()
        cy.xpath('//*[@data-qa="login-email"]').type(email)
        cy.xpath('//*[@data-qa="login-password"]').type(password)
        cy.xpath('//*[@data-qa="login-button"]').click()
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.xpath('//*[@data-qa="continue-button"]').click()
    })
}); 