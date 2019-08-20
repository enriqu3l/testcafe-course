import { BASE_URL, USERNAME, PASSWORD, INVALID_USER, INVALID_PASS } from '../utils/constants'
import NavbarPage from '../page-objects/NavbarPage';
import SearchResultsPage from '../page-objects/SearchResultsPage';;

const navbarPage = new NavbarPage();
const searchResultsPage = new SearchResultsPage();

//prettier-ignore
fixture `Login Test`.page `${BASE_URL}`;

test('Search should work', async t => {
    navbarPage.search('online bank');

    await t.expect(searchResultsPage.resultsTitle.exists).ok();
    await t
        .expect(searchResultsPage.message.innerText)
        .contains('Zero - Free Access to Online Banking');
})