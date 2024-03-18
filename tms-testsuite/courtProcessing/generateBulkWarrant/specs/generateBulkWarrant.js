import * as locators from "../generateBulkWarrantLocators"
import * as generateBulkWarrantTestData from "../generateBulkWarrantTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.generateBulkWarrant);
    });

    it('Generate Warrants list', async () => {
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.courtDateFrom, generateBulkWarrantTestData.courtDateFrom, 2000);
        await func.waitAndFill(locators.fields.courtDateTo, generateBulkWarrantTestData.courtDateTo, 2000);
        await func.waitAndFill(locators.fields.numberOfRecordsTOBeFetched, generateBulkWarrantTestData.NumberOfRecordsToBeFetched, 2000);
        await func.waitAndClick(locators.button.generateList, 2000);
    })

    it('Gernate Warrants for list', async () => {
        await func.waitAndClick(locators.button.generateBulkWarrant, 2000);
        await func.selectDropdown(locators.fields.courtSlot, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.hearing, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtDecision, 2, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.plea, 2, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.parishJudge, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.warrantType, 3, locators.fields.valueSelect, 2000);
        // await func.waitAndClick(locators.fields.isSendToSignEasy, 2000);
        await func.waitAndFill(locators.fields.comment, generateBulkWarrantTestData.comment, 2000);
        await func.waitAndClick(locators.fields.ok, 2000);    
    })
})