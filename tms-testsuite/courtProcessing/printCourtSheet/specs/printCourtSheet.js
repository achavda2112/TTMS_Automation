import * as locators from "../printCourtSheetLocators"
import * as printCourtSheetTestData from "../printCourtSheetTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"
import { Key } from 'webdriverio'

describe('My Login application', () => {

    let handles;

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.printCourtSheet);
    });
    it('Print CourtSheet', async () => {
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClear(locators.fields.courtDateStart, 10, 1000);
        await browser.keys([Key.Escape]);
        await browser.pause(3000);
        await func.waitAndFillWithMore(locators.fields.courtDateStartInput, printCourtSheetTestData.courtDateStart, 2000);
        await func.waitAndClear(locators.fields.courtDateEnd, 10, 1000);
        await browser.keys([Key.Escape]);
        await browser.pause(3000);
        await func.waitAndFillWithMore(locators.fields.courtDateEndInput, printCourtSheetTestData.courtDateEnd, 2000);
        await func.selectDropdown(locators.fields.selectSlot, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.sortBy, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.modeOfEntry, 2, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);   
        await browser.pause(5000);
        handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
        await func.waitAndClick(locators.button.printeTickets,3000);
        await browser.pause(5000);
        handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
})