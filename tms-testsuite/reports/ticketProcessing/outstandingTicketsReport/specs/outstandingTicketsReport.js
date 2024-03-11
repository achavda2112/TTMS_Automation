import * as locators from "../outstandingTicketsReportLocators"
import * as outstandingTicketsReportTestData from "../outstandingTicketsReportTestData"
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
        await func.navigateMenu(utilLocators.menu.menu_item_outstanding_Tickets_Report);
    });
    it('Search Filter', async () => {
        await func.waitAndFill(locators.fields.ticketIssueDateStart, outstandingTicketsReportTestData.ticketIssueDateStart, 2000, true);
        await func.waitAndFill(locators.fields.ticketIssueDateEnd, outstandingTicketsReportTestData.ticketIssueDateEnd, 2000, true);
        await func.selectDropdown(locators.fields.parish, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
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