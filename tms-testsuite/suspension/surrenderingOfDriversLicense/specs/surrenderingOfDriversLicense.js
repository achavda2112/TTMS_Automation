import * as locators from "../surrenderingOfDriversLicenseLocators"
import * as surrenderingOfDriversLicenseTestData from "../surrenderingOfDriversLicenseTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {
let handles;

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.suspension).waitForExist();
        await $(utilLocators.menu.suspension).click();
        await func.navigateMenu(utilLocators.menu.surrenderingOfDriversLicense);
    });
    it('surrendering Of Drivers License', async () => {
        // // await func.waitAndClick(locators.fields.printNotice, 2000);
        // await func.waitAndClick(locators.fields.rePrintNotice, 2000);
        // await func.selectDropdown(locators.fields.suspensionOrigin, 2, locators.fields.valueSelect, 2000);
        // await func.waitAndFill(locators.fields.effectiveStartDate, printNoticeOfSuspensionTestData.effectiveStartDate, 2000, true);
        // await func.waitAndFill(locators.fields.effectiveEndDate, printNoticeOfSuspensionTestData.effectiveEndDate, 2000, true);
        await func.waitAndFill(locators.fields.dlNumber, surrenderingOfDriversLicenseTestData.dlNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
        // await func.waitAndClick(locators.button.clear, 2000);
        await func.waitAndFill(locators.fields.surrenderedBy, surrenderingOfDriversLicenseTestData.surrenderedBy, 2000);
        await func.waitAndFill(locators.fields.receivedBy, surrenderingOfDriversLicenseTestData.ReceivedBy, 2000);
        await func.waitAndFill(locators.fields.dateReceived, surrenderingOfDriversLicenseTestData.dateReceived, 2000, true);
        await func.waitAndFill(locators.fields.comment, surrenderingOfDriversLicenseTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);   
        await browser.pause(2000);
    })
});