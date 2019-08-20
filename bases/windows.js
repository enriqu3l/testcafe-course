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

test('windows', async t => {

    //Specific URL
    await t.navigateTo('url');

    //Resize Windows
    await t.resizeWindow(800, 600);

    //Maximise Window
    await t.maximizeWindow();

});