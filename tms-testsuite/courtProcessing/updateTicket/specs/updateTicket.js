import * as locators from "../updateTicketLocators"
import * as updateTicketTestData from "../updateTicketTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"
import { Key } from 'webdriverio'

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.updateTicketDetails);
    });
    it('Update Ticket', async () => {
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.ticketNumber, updateTicketTestData.ticketNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
        await func.waitAndClick(locators.fields.orignalValueexpanded, 2000);
        await func.waitAndClick(locators.fields.idNumberCheckBox, 2000);
        await func.waitAndFill(locators.fields.dlNumber, updateTicketTestData.dlNumber, 2000);
        await func.waitAndClick(locators.button.fetch, 2000);
        await func.waitAndClick(locators.fields.changeOffence, 2000);
        await func.selectDropdown(locators.fields.newOffence, 17, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.reason, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, updateTicketTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);   
        await browser.pause(3000);
    })

    it('Approve unauthorised list', async () => {
        await func.waitAndClick(locators.button.unAuthorizedList, 2000);
        await func.waitAndClick(locators.fields.spanTicketNumber, 2000);
        await func.waitAndClick(locators.button.authorize, 2000);
        await browser.pause(2000);
    })

    it('delete unauthorised list', async () => {
        await func.waitAndClick(locators.button.unAuthorizedList, 2000);
        await func.waitAndClick(locators.fields.spanTicketNumber, 2000);
        await func.waitAndClick(locators.button.delete, 2000);
        await browser.pause(2000);
    })
})