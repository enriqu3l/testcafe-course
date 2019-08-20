import { Selector } from 'testcafe';

//prettier-ignore
fixture `Feedback from test`
    .page `http://zero.webappsecurity.com/index.html`;


test('Should submit feedback form', async t => {
    //Get Selectors
    const linkToFeedback = Selector('#feedback');
    const formName = Selector('#name');
    const formEmail = Selector('#email');
    const formSubject = Selector('#subject');
    const fromComment = Selector('#comment');
    const formSubmitButton = Selector('input').withAttribute('value', 'Send Message');
    const message = Selector('div');

    //Actions
    await t.click(linkToFeedback);
    await t.typeText(formName, 'name');
    await t.typeText(formEmail, 'email@email.com');
    await t.typeText(formSubject, 'subject');
    await t.typeText(fromComment, 'Comment');
    await t.click(formSubmitButton);

    //Assertions
    await t.expect(message.innerText).contains('Thank you for your comments');

})