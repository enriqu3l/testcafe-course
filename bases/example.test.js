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

test('First Test', async t => {
    //Supports crossbrowsing
    //Supoports Parallel testing
    //Supports headless mode in chrome and firefox only
    //Supoports Page Object Model
    //It works only in javascript laguages
    //Supports Screenshots and video recording
    //Supports Browserstack and Soucelabs

    //TestCafe doesnt support Xpath selectors, because it works at proxy level and not a browser level
    //But you can use Xpath using external libraries (like Xpath to CSS)

    const developerName = Selector('#developer-name');
    const submitButton = Selector('#submit-button');
    const articleHeader = Selector('#article-header');

    await t.setTestSpeed(0.10); //Set speed of execution (between 0.01 and 1)
    await t.typeText(developerName, 'Kaniel');

    await t.takeScreenshot();
    await t.takeElementScreenshot(submitButton);

    await t.click(submitButton);
    //await t.wait(5000) //Set a Timeout of 5 seconds
    await t.expect(articleHeader.innerText).contains('Kaniel');
});