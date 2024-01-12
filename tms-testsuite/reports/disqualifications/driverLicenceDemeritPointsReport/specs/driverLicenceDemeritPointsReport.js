import * as locators from "../driverLicenceDemeritPointsReportLocators"
import * as driverLicenceDemeritPointsReportTestData from "../driverLicenceDemeritPointsReportTestData"
import * as userData from "../../../../utils/testData"
import * as func from "../../../../utils/function"
import locator, * as utilLocators from "../../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.reports).waitForExist();
        await $(utilLocators.menu.reports).click();
        await browser.pause(2000);
        await $(utilLocators.menu.menu_item_disqualifications).waitForExist();
        await $(utilLocators.menu.menu_item_disqualifications).click();
        await func.navigateMenu(utilLocators.menu.menuItemDriverLicenceDemeritPoints);
    });
    it('Add API Maintenance', async () => {
        await func.selectDropdown(locators.fields.driversLicenceStatus, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});