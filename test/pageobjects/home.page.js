const { $ } = require('@wdio/globals')
const Page = require('./page');
const clientConfig = require('../../config/clientManager');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get homeContainer() {
        return $(clientConfig.selectors.home.homeContainer);
    }
}

module.exports = new HomePage();
