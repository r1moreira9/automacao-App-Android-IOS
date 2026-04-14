const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Abrir App Mobile', () => {
    it('deve abrir o app com sucesso', async () => {
        await driver.pause(5000)
    })
})
