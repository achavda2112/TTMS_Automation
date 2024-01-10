import * as locators from "../reversalOfSuspensionLocators"
import * as reversalOfSuspensionTestData from "../reversalOfSuspensionTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.suspension).waitForExist();
        await $(utilLocators.menu.suspension).click();
        await func.navigateMenu(utilLocators.menu.itemReversalOfSuspensionAdd);
    });
    it('Suspend Licences By Points', async () => {
        await func.waitAndFill(locators.fields.dlNumber, reversalOfSuspensionTestData.dlNumber, 2000);
        await func.waitAndClick(locators.button.add, 2000);
        // await func.selectDropdown(locators.fields.collectorate, 1, locators.fields.valueSelect, 2000);
        // await func.waitAndClick(locators.fields.checkBox, 2000);
        // await func.waitAndClick(locators.button.print, 2000);
        // await func.waitAndClick(locators.fields.ok, 2000);
        await browser.pause(2000);
    })
});