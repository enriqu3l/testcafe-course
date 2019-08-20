import NavbarPage from '../page-objects/NavbarPage';
import LoginPage from '../page-objects/LoginPage';
import ForgottenPasswordPage from '../page-objects/ForgottenPasswordPage'

const navbarPage = new NavbarPage();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

//prettier-ignore
fixture `send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`;

test('Should send new password', async t => {
    navbarPage.clickSigninButton();
    loginPage.clickLinkToPasswords();
    forgottenPasswordPage.submitEmail('email@email.com');

    await t
        .expect(forgottenPasswordPage.message.innerText)
        .contains('Your password will be sent to the following email:');
    await t.expect(forgottenPasswordPage.userEmail.exists).notOk();
})