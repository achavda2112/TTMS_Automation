import * as locators from "../ticketEnquiryLocators"
import * as ticketEnquiryTestData from "../ticketEnquiryTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"
import { Key } from 'webdriverio'

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.ticketProcessing1).waitForExist();
        await $(utilLocators.menu.ticketProcessing1).click();
        await func.navigateMenu(utilLocators.menu.ticketEnquiry);
    });

    it('Fill all filters', async () => {

        let result;

        //Ticket Information

        await func.selectDropdown(locators.fields.ticketType, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.modeOfEntry, 2, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.ticketNumber, ticketEnquiryTestData.ticketNumber);
        await browser.keys([Key.Enter]);
        await func.waitAndFill(locators.fields.dlNumber, ticketEnquiryTestData.idNumber);
        await func.waitAndFillWithMore(locators.fields.issueDateStart, ticketEnquiryTestData.issueDateStart1);
        await func.waitAndFill(locators.fields.issueDateEnd, ticketEnquiryTestData.issueDateEnd1);
        await func.selectDropdown(locators.fields.offence, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.offenceParish, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.offenceLocation, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.policeStation, 2, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.policeOfficer, 1, locators.fields.valueSelect);
        await func.waitAndFillWithMore(locators.fields.courtDateStart, ticketEnquiryTestData.courtDateStart1);
        await func.waitAndFillWithMore(locators.fields.courtDateEnd, ticketEnquiryTestData.courtDateEnd1);
        await func.selectDropdown(locators.fields.createdBy, 5, locators.fields.valueSelect);
        await func.waitAndClick(locators.button.applyFilter, 2000);
        await func.waitAndClick(locators.button.clear, 2000);
        await func.waitAndClick(locators.button.applyFilter, 2000);
        await func.waitAndClick(locators.button.view, 2000);
    })

});