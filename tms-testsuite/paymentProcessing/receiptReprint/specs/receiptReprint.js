import * as locators from "../receiptReprintLocators"
import * as receiptReprintTestData from "../receiptReprintTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {


    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.paymentProcessing).waitForExist();
        await $(utilLocators.menu.paymentProcessing).click();
        await func.navigateMenu(utilLocators.menu.receiptReprint);
    });
    it('payment', async () => {
        await func.waitAndFill(locators.fields.receiptNumber, receiptReprintTestData.receiptNumber, 2000);  
        await func.waitAndFill(locators.fields.ticketNumber, receiptReprintTestData.ticketNumber, 2000);  
        await func.waitAndClick(locators.button.fetch, 2000);
        // await func.waitAndClick(locators.button.clear, 2000);
        await func.waitAndClick(locators.button.print, 2000);
        await browser.pause(2000);
    })
});