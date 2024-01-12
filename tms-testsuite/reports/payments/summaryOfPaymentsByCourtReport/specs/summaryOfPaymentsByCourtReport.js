import * as locators from "../summaryOfPaymentsByCourtReportLocators"
import * as summaryOfPaymentsByCourtReportTestData from "../summaryOfPaymentsByCourtReportTestData"
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
        await $(utilLocators.menu.menuItemPayments).waitForExist();
        await $(utilLocators.menu.menuItemPayments).click();
        await func.navigateMenu(utilLocators.menu.failedPaymentsRepors);
    });
    it('Add API Maintenance', async () => {
        await func.waitAndFillWithMore(locators.fields.PaymentDateStart, summaryOfPaymentsByCourtReportTestData.paymentDateStart, 2000);
        await func.waitAndFillWithMore(locators.fields.PaymentDateEnd, summaryOfPaymentsByCourtReportTestData.paymentDateEnd, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});