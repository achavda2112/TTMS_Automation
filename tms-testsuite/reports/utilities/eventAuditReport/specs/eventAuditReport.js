import * as locators from "../eventAuditReportLocators"
import * as eventAuditReportTestData from "../eventAuditReportTestData"
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
        await $(utilLocators.menu.menu_item_utitlies).waitForExist();
        await $(utilLocators.menu.menu_item_utitlies).click();
        await func.navigateMenu(utilLocators.menu.menu_item_event_audit);
    });
    it('Search Filter', async () => {
        await func.selectDropdown(locators.fields.feature, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.dateRangeStart, eventAuditReportTestData.dateRangeStart, 2000, true);
        await func.waitAndFill(locators.fields.dateRangeEnd, eventAuditReportTestData.dateRangeEnd, 2000, true);
        await func.waitAndClick(locators.fields.user, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});