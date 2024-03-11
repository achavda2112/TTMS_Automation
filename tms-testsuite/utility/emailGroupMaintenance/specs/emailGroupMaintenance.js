import * as locators from "../emailGroupMaintenanceLocators"
import * as emailGroupMaintenanceTestData from "../emailGroupMaintenanceTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {
let result;

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.utilities).waitForExist();
        await $(utilLocators.menu.utilities).click();
        await func.navigateMenu(utilLocators.menu.emailGroupMaintenance);
    });
    it('Add Email Group', async () => {
        await func.waitAndClick(locators.button.add, 2000);
        result = await func.setUniqueValue(locators.fields.name, locators.fields.errorCode, false, 10, "Title");
        console.log("-----------Result---------", result);
        await func.waitAndFill(locators.fields.description, emailGroupMaintenanceTestData.description, 2000);
        await func.selectDropdown(locators.fields.organization, 2, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.user);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.addorg, 2000);
        await func.selectDropdown(locators.fields.organization, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.user);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.save, 2000);
        await browser.pause(2000);
    })
    it('Edit Email Group', async () => {
        await func.verifySearch(locators.fields.searchlist, result);
        await func.waitAndClick(locators.fields.action, 2000);
        await func.waitAndFill(locators.fields.description, emailGroupMaintenanceTestData.editdescription, 2000);
        await func.selectDropdown(locators.fields.statusinactive, 2, locators.fields.valueSelect, 2000);
        await func.verifySearch(locators.fields.search, emailGroupMaintenanceTestData.search, 2000);
        await func.waitAndClick(locators.fields.deleteuser, 2000);
        await func.waitAndClick(locators.button.update, 2000);
        await browser.pause(2000);
    })
    it('Active Status', async () => {
        await func.verifySearch(locators.fields.searchlist, result, 2000);
        await func.waitAndClick(locators.fields.status, 2000);
        await func.waitAndClick(locators.fields.ok, 2000);
    })
});