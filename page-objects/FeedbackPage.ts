import { Selector, t } from 'testcafe';

class FeedbackPage {
    formName: Selector = Selector('#name');
    formEmail: Selector = Selector('#email');
    formSubject: Selector = Selector('#subject');
    fromComment: Selector = Selector('#comment');
    formSubmitButton = Selector('input').withAttribute('value', 'Send Message');

    async submitFeedback( t: TestController){
        await t
            .typeText(this.formName,'name')
            .typeText(this.formEmail,'email')
            .typeText(this.formSubject,'subject')
            .typeText(this.fromComment,'comment')
            .click(this.formSubmitButton);
    }
}

export default FeedbackPage;