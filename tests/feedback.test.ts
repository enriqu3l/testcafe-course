import { Selector } from 'testcafe';
import FeedbackPage from '../page-objects/FeedbackPage';

const feedbackPage = new FeedbackPage();

//prettier-ignore
fixture `Feedback from test`
    .page `http://zero.webappsecurity.com/index.html`;


test('Should submit feedback form', async t => {
    //Get Selectors
    const linkToFeedback = Selector('#feedback');
    const message = Selector('div');

    //Actions
    await t.click(linkToFeedback);
    feedbackPage.submitFeedback(t);

    //Assertions
    await t.expect(message.innerText).contains('Thank you for your comments');

})