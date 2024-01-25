import * as locators from "../voidTicketsReportLocators"
import * as voidTicketsReportTestData from "../voidTicketsReportTestData"
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
        await $(utilLocators.menu.menu_item_ticket_processing_reports).waitForExist();
        await $(utilLocators.menu.menu_item_ticket_processing_reports).click();
        await func.navigateMenu(utilLocators.menu.menu_item_void_tickets);
    });
    it('Search Filter', async () => {
        await func.waitAndFillWithMore(locators.fields.authorisationDateFrom, voidTicketsReportTestData.authorisationDateFrom, 2000);
        await func.waitAndFillWithMore(locators.fields.authorisationDateTo, voidTicketsReportTestData.authorisationDateTo, 2000);
        await func.selectDropdown(locators.fields.area, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.division, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.StationOffice, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});