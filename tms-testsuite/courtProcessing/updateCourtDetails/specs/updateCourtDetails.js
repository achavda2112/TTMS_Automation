import * as locators from "../updateCourtDetailsLocators"
import * as updateCourtDetailsTestData from "../updateCourtDetailsTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.updateCourtDetails);
    });
    it('Filter Ticket', async () => {
        await func.waitAndFill(locators.fields.informationNumber, updateCourtDetailsTestData.informationNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
    })

    it('Update Court', async () => {
        await func.selectDropdown(locators.fields.hearingType, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtDecision, 4, locators.fields.valueSelect, 2000);
        await func.waitAndFillWithMore(locators.fields.newCourtDate, updateCourtDetailsTestData.newCourtDate, 2000);
        await func.selectDropdown(locators.fields.newSlot, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.newHearingType, 3, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.reason, 3, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comment, updateCourtDetailsTestData.comment, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
    it('Filter Ticket', async () => {
        await func.waitAndFill(locators.fields.informationNumber, updateCourtDetailsTestData.informationNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
    })
    it('Update Court', async () => {
        await func.selectDropdown(locators.fields.hearingType, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtDecision, 16, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.magistrateRoleName, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.plea, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comment, updateCourtDetailsTestData.comment, 2000);
        await func.waitAndClick(locators.button.next, 2000);
        await func.selectDropdown(locators.fields.verdict, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.bailAmt, updateCourtDetailsTestData.bailAmt, 2000); 
        await func.waitAndFill(locators.fields.courtFine, updateCourtDetailsTestData.courtFine, 2000); 
        await func.waitAndFill(locators.fields.courtFineDays, updateCourtDetailsTestData.courtFineDays, 2000); 
        await func.waitAndFill(locators.fields.courtCost, updateCourtDetailsTestData.courtCost, 2000); 
        await func.waitAndFill(locators.fields.amtPaid, updateCourtDetailsTestData.amtPaid, 2000);
        await func.waitAndClick(locators.fields.offenderOptToServeTime, 2000);
        await func.waitAndFill(locators.fields.comments, updateCourtDetailsTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000); 
    })
});