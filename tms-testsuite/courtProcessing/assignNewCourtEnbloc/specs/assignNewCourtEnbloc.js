import * as locators from "../assignNewCourtEnblocLocators"
import * as assignNewCourtEnblocTestData from "../assignNewCourtEnblocTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.assignNewCourtEnbloc);
    });
    it('Print CourtSheet', async () => {
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFillWithMore(locators.fields.oldcourtDate1, assignNewCourtEnblocTestData.oldCourtDate, 2000);
        await func.selectDropdown(locators.fields.oldCourtSlot, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.fetchData, 2000);
      //  await func.waitAndFillWithMore(locators.fields.newCourtDate1, assignNewCourtEnblocTestData.newCourtDate, 2000);
        await func.selectDropdown(locators.fields.newCourtSlot, 1, locators.fields.valueSelect, 2000);     
        await func.selectDropdown(locators.fields.courtDecision, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.reason, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, assignNewCourtEnblocTestData.comments, 2000);
        await func.waitAndFill(locators.fields.informationNumber, assignNewCourtEnblocTestData.informationNumber, 2000);
        await func.waitAndClick(locators.fields.ticketNumber, 2000);
        await func.waitAndClick(locators.button.submit, 2000);   
        await browser.pause(3000);

    })
});