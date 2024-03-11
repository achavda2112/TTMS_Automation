import * as locators from "../prepareCourtSheetLocators"
import * as prepareCourtSheetTestData from "../prepareCourtSheetTestData"
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
        await func.navigateMenu(utilLocators.menu.prepareCourtSheet);
    });
    it('Prepare CourtSheet', async () => {
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClear(locators.fields.courtDate, 10, 1000);
        await browser.keys([Key.Escape]);
        await browser.pause(3000);
        await func.waitAndFill(locators.fields.courtDate1, prepareCourtSheetTestData.courtDate, 2000, true);
        await func.selectDropdown(locators.fields.sortBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.noOfRecords, prepareCourtSheetTestData.numberOfRecords, 2000);
        await func.selectDropdown(locators.fields.modeOfEntry, 2, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateList, 2000);
        await func.waitAndFill(locators.fields.preFix, prepareCourtSheetTestData.preFix, 2000);
        await func.waitAndFill(locators.fields.Sequencenumber, prepareCourtSheetTestData.sequenceNumber, 2000);
        await func.waitAndClick(locators.fields.radioButton, 2000);
        await func.selectDropdown(locators.fields.assignMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.assignSlot, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.informationNumber1, prepareCourtSheetTestData.informationNumber1, 2000);
        await func.waitAndFill(locators.fields.informationNumber2, prepareCourtSheetTestData.informationNumber2, 2000);
        await func.waitAndFill(locators.fields.informationNumber3, prepareCourtSheetTestData.informationNumber3, 2000);
        await func.waitAndClick(locators.button.save);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
})