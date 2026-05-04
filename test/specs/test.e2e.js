const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Abrir App Mobile e Login', () => {
    it('deve logar com credenciais validas', async () => {
        // Exemplo: chamando o método login no page object, que por sua vez usará os seletores dinâmicos passados no config!
        await LoginPage.login('fael.moreira.19@gmail.com', '123456')
        
        // Validação de sucesso: espera que o container da home esteja visível
        await expect(HomePage.homeContainer).toBeDisplayed()
    })
})
