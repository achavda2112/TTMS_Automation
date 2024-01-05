import * as locators from "../courtAppealLocators"
import * as courtAppealTestData from "../courtAppealTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.courtAppeal);
    });
    
    it('Filter Ticket', async () => {
        await func.waitAndFill(locators.fields.informationNumber, courtAppealTestData.informationNumber, 2000);
        await func.waitAndClick(locators.button.search, 2000);
})
    it('Update Appeal', async () => {
        await func.waitAndClick(locators.fields.dateOfAppeal, 2000);
        await func.waitAndFillWithMore(locators.fields.dateOfAppeal, courtAppealTestData.dateOfAppeal, 2000);
        await func.selectDropdown(locators.fields.ResultOfAppeal, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, courtAppealTestData.comment, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
});
