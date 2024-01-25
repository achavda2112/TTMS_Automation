import * as locators from "../userAuditReportLocators"
import * as userAuditReportTestData from "../userAuditReportTestData"
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
        await func.navigateMenu(utilLocators.menu.menu_item_user_audit);
    });
    it('Search Filter', async () => {
        await func.waitAndClick(locators.fields.user, 2000);
        await func.waitAndFillWithMore(locators.fields.dateRangeStart, userAuditReportTestData.dateRangeStart, 2000);
        await func.waitAndFillWithMore(locators.fields.dateRangeEnd, userAuditReportTestData.dateRangeEnd, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});