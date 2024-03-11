import * as locators from "../receiptOfDisqualifiedLicenceByCourtLocators"
import * as receiptOfDisqualifiedLicenceByCourtTestData from "../receiptOfDisqualifiedLicenceByCourtTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.receiptofDisqualifiedLicenceByCourt);
    });

    it('Filter Ticket', async () => {
        await func.waitAndFill(locators.fields.informationNumber, receiptOfDisqualifiedLicenceByCourtTestData.informationNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
})
    it('Update Appeal', async () => {
        await func.waitAndClick(locators.fields.dLDisqualification, 2000);
        await func.waitAndFill(locators.fields.disqualificationDuration, dLDisqualificationByCourtTestData.disqualificationDuration, 2000);
        await func.waitAndClick(locators.fields.dLSurrendered, 2000);
        await func.waitAndFillWith(locators.fields.dlSurrenderedDate, dLDisqualificationByCourtTestData.dlSurrenderedDate, 2000, true);
        await func.waitAndFill(locators.fields.receivedBy, dLDisqualificationByCourtTestData.receivedBy, 2000);
        await func.selectDropdown(locators.fields.reason, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, dLDisqualificationByCourtTestData.comment, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
});

