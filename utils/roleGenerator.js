import { BASE_URL, USERNAME, PASSWORD, VALID_NAME } from '../utils/constants'
import LoginPage from '../page_objects/socialNetwork/gravityStudentLoginPage'
import HomePage from '../page_objects/socialNetwork/gravityStudentHomePage'
import SearchPage from '../page_objects/socialNetwork/gravityStudentSearchPage'
import { Role } from 'testcafe'

class RoleGenerator {
    student = Role(
        STUNDENT_BASE_URL,
        async() => {
            await LoginPage.login(USER, PASS)
        }, { preserveUrl: true }
    )

    studentProfile = Role(
        STUNDENT_BASE_URL,
        async() => {
            await LoginPage.login(USER, PASS)
            await HomePage.searchUser(VALID_NAME)
            await SearchPage.navToPublicProfile()
        }, { preserveUrl: true }
    )
}
export default new RoleGenerator()