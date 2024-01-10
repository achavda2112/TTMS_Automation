import * as locators from "../removalOfEndorsementOnDriversLicenceLocators"
import * as removalOfEndorsementOnDriversLicenceTestData from "../removalOfEndorsementOnDriversLicenceTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {


    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.suspension).waitForExist();
        await $(utilLocators.menu.suspension).click();
        await func.navigateMenu(utilLocators.menu.removalOfEndorsementOnDriversLicence);
    });
    it('Suspend Licences By Points', async () => {
        await func.waitAndClick(locators.fields.dLNumberClick, 2000);
        await func.waitAndClick(locators.button.back, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.submit, 2000);
        await browser.pause(2000);
    })
});