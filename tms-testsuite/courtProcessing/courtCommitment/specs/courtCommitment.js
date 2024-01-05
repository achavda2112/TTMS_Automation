import * as locators from "../courtCommitmentLocators"
import * as courtCommitmentTestData from "../courtCommitmentTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.courtCommitment);
    });

    it('Filter Ticket', async () => {
        await func.waitAndFill(locators.fields.informationNumber, courtCommitmentTestData.informationNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
    })
    it('Update Court', async () => {
        await func.waitAndFill(locators.fields.commitmentNumber, courtCommitmentTestData.commitmentNumber, 2000);
        await func.waitAndClick(locators.fields.policePoliceStationIssuedToStation, 3000);
        await func.selectDropdown(locators.fields.policePoliceStationIssuedToStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.timeServed, courtCommitmentTestData.timeServed, 2000);
        await func.waitAndClick(locators.fields.isDocumentReturnedTrue, 2000);
        await func.waitAndFill(locators.fields.comments, courtCommitmentTestData.comment, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
});