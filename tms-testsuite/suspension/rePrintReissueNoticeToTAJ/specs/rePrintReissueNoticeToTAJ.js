import * as locators from "../rePrintReissueNoticeToTAJLocators"
import * as rePrintReissueNoticeToTAJTestData from "../rePrintReissueNoticeToTAJTestData"
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
        await browser.pause(2000);
        await $(utilLocators.menu.reissueNoticeToTAJ).waitForExist();
        await $(utilLocators.menu.reissueNoticeToTAJ).click();
        await func.navigateMenu(utilLocators.menu.reprintreissueNoticeToTAJ);
    });
    it('Suspend Licences By Points', async () => {
        await func.waitAndFill(locators.fields.printDateStart, rePrintReissueNoticeToTAJTestData.priintStartDate, 2000, true);
        await func.waitAndFill(locators.fields.printDateEnd, rePrintReissueNoticeToTAJTestData.printEndDate, 2000, true);
        await func.waitAndClick(locators.button.search, 2000);
        await func.selectDropdown(locators.fields.collectorate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.print, 2000);
        await func.waitAndClick(locators.fields.ok, 2000);
        await browser.pause(2000);
    })
});