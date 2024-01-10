import * as locators from "../letterHeadSetupLocators"
import * as letterHeadSetupTestData from "../letterHeadSetupTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.utilities).waitForExist();
        await $(utilLocators.menu.utilities).click();
        await func.navigateMenu(utilLocators.menu.letterHeadSetup);
    });
    it('Add Email Group', async () => {
        await func.waitAndClick(locators.button.add, 2000);
        await func.selectDropdown(locators.fields.notice, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.nameOfOrganization, letterHeadSetupTestData.nameOfOrganization, 2000);
        await func.selectDropdown(locators.fields.organizationCategory, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.organizationLocation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.signatoryName, letterHeadSetupTestData.signatoryName, 2000);
        await func.waitAndFill(locators.fields.signatoryTitle, letterHeadSetupTestData.signatoryTitle, 2000);
        await func.waitAndClick(locators.button.save, 2000);
        await browser.pause(2000);
    })
    it('Edit Email Group', async () => {
        await func.selectDropdown(locators.fields.notice, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.search, 2000);
        await func.waitAndFill(locators.fields.nameOfOrganization, letterHeadSetupTestData.nameOfOrganizationEdited, 2000);
        await func.selectDropdown(locators.fields.organizationCategory, 2, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.organizationLocation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.signatoryName, letterHeadSetupTestData.signatoryNameEdited, 2000);
        await func.waitAndFill(locators.fields.signatoryTitle, letterHeadSetupTestData.signatoryTitleEdited, 2000);
        await func.waitAndClick(locators.button.save, 2000);
        await browser.pause(2000);
    })
});