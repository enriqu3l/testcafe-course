import { BASE_URL, USERNAME, PASSWORD, INVALID_USER, INVALID_PASS } from '../utils/constants'
import NavbarPage from '../page-objects/NavbarPage';
import LoginPage from '../page-objects/LoginPage';

const navbarPage = new NavbarPage();
const loginPage = new LoginPage();

//prettier-ignore
fixture `Login Test`.page `${BASE_URL}`;

test('Smoke: Should try to login and get error message', async t => {
    console.log('process.env.BROWSERSTACK_USERNAME: ', process.env.BROWSERSTACK_USERNAME);
    console.log('process.env[BROWSERSTACK_USERNAME]: ', process.env['BROWSERSTACK_USERNAME']);

    navbarPage.clickSigninButton();
    loginPage.login(INVALID_USER, INVALID_PASS);

    //Assertions
    await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong.')
    await t.expect(loginPage.form.exists).ok
})

test('Smoke: Should try to login and enter to dashboard', async t => {
    navbarPage.clickSigninButton();
    loginPage.login(USERNAME, PASSWORD);

    //Assertions
    //Here an assertion to validate we are in dashboard
})