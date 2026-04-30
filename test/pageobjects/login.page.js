const { $ } = require('@wdio/globals')
const Page = require('./page');
const clientConfig = require('../../config/clientManager');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $(clientConfig.selectors.login.inputUsername);
    }

    get inputPassword() {
        return $(clientConfig.selectors.login.inputPassword);
    }

    get btnSubmit() {
        return $(clientConfig.selectors.login.btnSubmit);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        // Pausa fixa inicial de 10 seg. para a tela azul de splash screen sumir completamente e o app montar:
        await driver.pause(10000);

        // Aguarda os elementos com até 20 seg por conta da lentidão
        await this.inputUsername.waitForDisplayed({ timeout: 20000 });
        
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
