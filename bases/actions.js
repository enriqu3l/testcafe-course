import { Selector } from 'testcafe';

fixture `Getting started with testcafe`
    .page `http://devexpress.github.io/testcafe/example`
    .before(async t => {
        //Test setup goes here
    })
    .beforeEach(async t => {
        // Runs before each test
    })
    .after(async => {
        //Clean up code goes here
    })
    .afterEach(async t => {
        //Run after each test
    });

test('Actions', async t => {
    //-- Actions --

    //Clikcs
    await t.click('id', { options });
    await t.doubleClick('id', { options });
    await t.rightClick('id', { options });

    //TypeText
    await t.typeText('id', 'text', { replace: true, paste: true });

    //Hover
    await t.hover('id', { options });

    //Keyboard 
    await t.pressKey('enter');
    await t.pressKey('shift+down');

});