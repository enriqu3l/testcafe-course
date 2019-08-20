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
    //-- Assertions --

    //Contains
    await t
        .expect('element or state or actual value')
        .contains('expected value', 'message', { timeout: 1000 }); //set timeout to 1 second for the assertion

    //Not contains
    await t.expect('actual').notContains('expected value', 'message', { options });

    //Deep Equal
    await t.expect('actual').eql('expected value', 'massage', { options });

    //Not Deep Equal
    await t.expect('actual').notEql('expected valiue', 'message', { options });

    //Check if exist
    await t.expect(Selector('#selector').exists).ok();

    //Check if not exist
    await t.expect(Selector('#selector').exists).notOk('error message if expect fails');

    //Grater then
    await t.expect('actual value').gt('exp;ected value', 'message', { options });

    //Less then
    await t.expect('actual value').lt('exp;ected value', 'message', { options });

    //Within some range
    await t.expect('actual value').within('start', 'finish', 'message', { options });

});