const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Abrir App Mobile e Login', () => {
    it('deve logar com credenciais validas', async () => {
        // Exemplo: chamando o método login no page object, que por sua vez usará os seletores dinâmicos passados no config!
        await LoginPage.login('fael.moreira.19@gmail.com', '123456')
        
        // Exemplo de uma asserção de sucesso na page pós-login 
        // Lembre de ajustar para o seu caso de uso real!
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
        await driver.pause(3000)
    })
})
