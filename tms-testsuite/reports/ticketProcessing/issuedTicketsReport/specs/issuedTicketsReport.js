import * as locators from "../issuedTicketsReportLocators"
import * as issuedTicketsReportTestData from "../issuedTicketsReportTestData"
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
        await func.navigateMenu(utilLocators.menu.menu_item_issued_tickets_reports);
    });
    it('Add API Maintenance', async () => {
        // await func.waitAndFill(locators.fields.ticketNumberStart, issuedTicketsReportTestData.ticketNumberStart, 2000);
        // await func.waitAndFill(locators.fields.ticketNumberEnd, issuedTicketsReportTestData.ticketNumberEnd, 2000);
        await func.waitAndFillWithMore(locators.fields.ticketIssueDateStart, issuedTicketsReportTestData.ticketIssueDateStart, 2000);
        await func.waitAndFillWithMore(locators.fields.ticketIssueDateEnd, issuedTicketsReportTestData.ticketIssueDateEnd, 2000);
        // await func.waitAndFill(locators.fields.idNumber, issuedTicketsReportTestData.idNumber, 2000);
        // await func.selectDropdown(locators.fields.offenceParish, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.offenceLocation, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.offence, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.area, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.division, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.stationOffice, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.policeOfficer, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.vehicleType, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.ticketStatus, 1, locators.fields.valueSelect, 2000);
        // await func.selectDropdown(locators.fields.sortBy, 1, locators.fields.valueSelect, 2000);
        // await func.waitAndFillWithMore(locators.fields.originalCourtDateStart, issuedTicketsReportTestData.originalCourtDateStart, 2000);
        // await func.waitAndFillWithMore(locators.fields.originalCourtDateEnd, issuedTicketsReportTestData.originalCourtDateEnd, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});