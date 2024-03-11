import * as locators from "../ticketsForOffenderReportLocators"
import * as ticketsForOffenderReportTestData from "../ticketsForOffenderReportTestData"
import * as userData from "../../../../../utils/testData"
import * as func from "../../../../../utils/function"
import locator, * as utilLocators from "../../../../../utils/locator"
// import { it } from "mocha";
// import { $ } from "webdriverio/build/commands/browser";

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
        await $(utilLocators.menu.menu_item_offender_Reports).waitForExist();
        await $(utilLocators.menu.menu_item_offender_Reports).click();
        await func.navigateMenu(utilLocators.menu.menu_item_tickets_for_offender_Reports);
    });
    it('Filter Reports', async () => {
        await func.waitAndFill(locators.fields.ticketIssueDateStart, ticketsForOffenderReportTestData.ticketIssueDateStart, 2000, true);
        await func.waitAndFill(locators.fields.ticketIssueDateEnd, ticketsForOffenderReportTestData.ticketIssueDateEnd, 2000, true);
        await func.waitAndFill(locators.fields.idNumber, ticketsForOffenderReportTestData.idNumber, 2000);
        await func.selectDropdown(locators.fields.ticketStatus, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});