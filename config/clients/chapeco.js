const base = require('./base');

module.exports = {
    ...base,
    app: 'C:\\Users\\rafael.silva\\automacao-App-Android-IOS\\apps\\abtChapeco-debug.apk',
    appPackage: 'br.com.pmb.abtchapeco',
    appActivity: 'br.com.pmb.abt.MainActivity',
    // Caso precise sobresscrever algum seletor no futuro, pode fazer aqui:
    // selectors: {
    //     ...base.selectors,
    //     login: {
    //         ...base.selectors.login,
    //         btnSubmit: '~novoIdsApenasNoChapeco'
    //     }
    // }
};
