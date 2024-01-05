import * as locators from "../earlyReleaseOfDisqualifiedDriversLicenceLocators"
import * as earlyReleaseOfDisqualifiedDriversLicenceTestData from "../earlyReleaseOfDisqualifiedDriversLicenceTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.earlyReleaseOfDisqualifiedDriversLicence);
    });

    it('Filter DL', async () => {
        await func.waitAndFill(locators.fields.dlNumber, earlyReleaseOfDisqualifiedDriversLicenceTestData.dlNumber, 2000);
        await func.waitAndClick(locators.button.search, 200);
})
    it('Release DL', async () => {
        await func.waitAndClick(locators.fields.release, 2000);
        await func.waitAndFillWithMore(locators.fields.releaseDate, earlyReleaseOfDisqualifiedDriversLicenceTestData.releaseDate, 2000);
        await func.selectDropdown(locators.fields.releaseByCourt, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.releaseByMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.reason, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, earlyReleaseOfDisqualifiedDriversLicenceTestData.Comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
});