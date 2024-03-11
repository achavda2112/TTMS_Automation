import * as locators from "../cashierDailySettlementLocators"
import * as cashierDailySettlementTestData from "../cashierDailySettlementTestData"
import * as userData from "../../../../utils/testData"
import * as func from "../../../../utils/function"
import locator, * as utilLocators from "../../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.reports).waitForExist();
        await $(utilLocators.menu.reports).click();
        await browser.pause(2000);
        await $(utilLocators.menu.cashiering).waitForExist();
        await $(utilLocators.menu.cashiering).click();
        await func.navigateMenu(utilLocators.menu.cashierDailySettlement);
    });
    it('Add API Maintenance', async () => {
        await func.waitAndFill(locators.fields.paymentDate, cashierDailySettlementTestData.paymentDate, 2000, true);
        await func.selectDropdown(locators.fields.cashier, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});