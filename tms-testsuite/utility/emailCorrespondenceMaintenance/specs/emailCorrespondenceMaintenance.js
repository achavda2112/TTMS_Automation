import * as locators from "../emailCorrespondenceMaintenanceLocators"
import * as emailCorrespondenceMaintenanceTestData from "../emailCorrespondenceMaintenanceTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.utilities).waitForExist();
        await $(utilLocators.menu.utilities).click();
        await func.navigateMenu(utilLocators.menu.emailCorrespondenceMaintenance);
    });
    it('Add Email Group', async () => {
        await func.waitAndClick(locators.button.add, 2000);
        await func.selectDropdown(locators.fields.job, 2, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.emailGroup, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
    it('Edit Email Group', async () => {
        await func.waitAndClick(locators.fields.action, 2000);
        await func.waitAndClick(locators.fields.emailGroup)
        await func.waitAndClick(locators.fields.editCheckBox, 2000);
        await func.waitAndClick(locators.button.update, 2000);
        await browser.pause(2000);
    })
});