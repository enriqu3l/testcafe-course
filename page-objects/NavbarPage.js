import { Selector, t } from 'testcafe';

class NavbarPage {
    constructor() {
        this.searchBox = Selector('#searchTerm');
        this.signinButton = Selector('#signin_button');
    }

    async search(text) {
        //dont forget to use just one await!!! in this kind of functions in Page Objects
        await t
            .typeText(this.searchBox, text, { paste: true, replace: true }) //Dont forget to add this.!!!!
            .pressKey('enter');
    }

    async clickSigninButton() {
        await t.click(this.signinButton);
    }
}

export default NavbarPage;