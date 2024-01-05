import * as locators from "../withdrawnCaseListLocators"
import * as withdrawnCaseListTestData from "../withdrawnCaseListTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await browser.pause(2000);
        await func.navigateMenu(utilLocators.menu.withdrawnCaseList);
    })

    it('Filter ticket', async () => {
        await func.waitAndFill(locators.fields.informationNumber, withdrawnCaseListTestData.informationNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
})
    it('withdraw Case', async () => {
        await func.selectDropdown(locators.fields.reasonForWithdrawal, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFillWithMore(locators.fields.dateOfWithdrawal, withdrawnCaseListTestData.dateOfWithdrawal, 2000);
        await func.selectDropdown(locators.fields.approvedbyRM, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, withdrawnCaseListTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
});
