import * as locators from "../rejectedTicketReportLocators"
import * as rejectedTicketReportTestData from "../rejectedTicketReportTestData"
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
        await browser.pause(3000);
        await $(utilLocators.menu.menu_item_rejected_Reports).waitForExist();
        await $(utilLocators.menu.menu_item_rejected_Reports).click();
    });
    it('Filter Reports', async () => {
        await func.waitAndFill(locators.fields.ticketIssueDateStart, rejectedTicketReportTestData.ticketDateStart, 2000, true);
        
        await func.waitAndFill(locators.fields.ticketIssueDateEnd, rejectedTicketReportTestData.ticketDateEnd, 2000, true);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});