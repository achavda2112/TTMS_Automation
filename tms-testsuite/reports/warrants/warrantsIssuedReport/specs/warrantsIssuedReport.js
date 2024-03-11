import * as locators from "../warrantsSummaryReportLocators"
import * as warrantsSummaryReportTestData from "../warrantsSummaryReportTestData"
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
        await $(utilLocators.menu.menu_item_warrants_Reports).waitForExist();
        await $(utilLocators.menu.menu_item_warrants_Reports).click();
        await func.navigateMenu(utilLocators.menu.menu_item_warrants_summary_report);
    });
    it('Search Filter', async () => {
        await func.waitAndFill(locators.fields.  warrantsSummaryReportTestData.warrantIssueDateStart, 2000, true);
        await func.waitAndFill(locators.fields.issueDateEnd, warrantsSummaryReportTestData.warrantIssueDateEnd, 2000, true);
        await func.selectDropdown(locators.fields.parish, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.issuingCourt, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.sortBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});