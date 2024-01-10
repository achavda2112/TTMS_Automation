import * as locators from "../aPIMaintenanceLocators"
import * as aPIMaintenanceTestData from "../aPIMaintenanceTestData"
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
        await func.navigateMenu(utilLocators.menu.apiMaintenance);
    });
    it('Add API Maintenance', async () => {
        await func.waitAndClick(locators.button.add, 2000);
        result = await func.setUniqueValue3(locators.fields.title, locators.fields.errorCode, false, 10);
        console.log("-----------Result---------", result);
        await func.waitAndFill(locators.fields.description, aPIMaintenanceTestData.description, 2000);
        await func.waitAndFillWithMore(locators.fields.expiryDate, aPIMaintenanceTestData.expiryDate, 2000);
        await func.waitAndClick(locators.fields.apis, 2000);
        await func.waitAndClick(locators.fields.api1);
        await func.waitAndClick(locators.fields.api2);
        await func.waitAndClick(locators.fields.api3);
        await func.waitAndClick(locators.fields.organization, 2000);
        await func.waitAndClick(locators.fields.org1);
        await func.waitAndClick(locators.fields.org2);
        await func.waitAndClick(locators.button.generateKey, 2000);
        await func.waitAndClick(locators.button.save, 2000);
        await browser.pause(2000);
    })
    it('Edit API Maintenance', async () => {
        await func.verifySearch(locators.fields.search, result);
        await func.waitAndClick(locators.fields.action, 2000);
        await func.waitAndFill(locators.fields.description, aPIMaintenanceTestData.editdescription, 2000);
        await func.waitAndClick(locators.button.regenerateKey, 2000);
        await func.selectDropdown(locators.fields.statusinactive, 2, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.save, 2000);
        await browser.pause(2000);
    })
    it('Active Status', async () => {
        await func.verifySearch(locators.fields.search, result, 2000);
        await func.waitAndClick(locators.fields.status, 2000);
        await func.waitAndClick(locators.fields.ok, 2000);
    })
});