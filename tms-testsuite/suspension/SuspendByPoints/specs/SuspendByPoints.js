import * as locators from "../SuspendByPointsLocators"
import * as SuspendByPointsTestData from "../SuspendByPointsTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {
let handles;

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.suspension).waitForExist();
        await $(utilLocators.menu.suspension).click();
        await func.navigateMenu(utilLocators.menu.suspendByPoints);
    });
    it('Suspend Licences By Points', async () => {
        await func.selectDropdown(locators.fields.demeritPoints, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.suspensionEffectiveDate, SuspendByPointsTestData.suspensionEffectiveDate, 2000, true);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.save, 2000);   
        await browser.pause(2000);
    })
});