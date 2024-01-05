import * as locators from "../authorizeEarlyRequestLocators"
import * as authorizeEarlyRequestTestData from "../authorizeEarlyRequestTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.authorizeEarlyRequest);
    });

    it('Filter DL', async () => {
        await func.waitAndFill(locators.fields.dlNumber, authorizeEarlyRequestTestData.dlNumber, 2000);
        await func.waitAndClick(locators.button.search, 200);
})
    it('Release DL', async () => {
        await func.waitAndClick(locators.fields.release, 2000);
    })
});