module.exports = {
    appPackage: '',
    appActivity: '',
    selectors: {
        login: {
            inputUsername: 'android=new UiSelector().resourceId("br.com.pmb.abtchapeco:id/edittext_email")',
            inputPassword: 'android=new UiSelector().resourceId("br.com.pmb.abtchapeco:id/edittext_password")',
            btnSubmit: 'android=new UiSelector().resourceId("br.com.pmb.abtchapeco:id/btnLogin")'
        },
        home: {
            homeContainer: 'android=new UiSelector().resourceId("br.com.pmb.abtchapeco:id/chooseproductlayout")'
        }
    }
};
