import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.form = Selector('#login_form');
        this.userName = Selector('#user_login');
        this.userPass = Selector('#user_password');
        this.errorMessage = Selector('.alert-error');
        this.linkToPasswords = Selector('a').withText('Forgot your password ?');
    }

    async login(username, password) {
        await t
            .typeText(this.userName, username, { paste: true }) //Dont forget to add this.!!!!
            .typeText(this.userPass, password, { paste: true }) //Dont forget to add this.!!!!
            .pressKey('enter');
    }

    async clickLinkToPasswords() {
        await t.click(this.linkToPasswords);
    }
}

export default LoginPage;