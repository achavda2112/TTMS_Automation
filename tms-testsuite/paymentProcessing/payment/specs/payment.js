import * as locators from "../paymentLocators"
import * as paymentTestData from "../paymentTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {


    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.paymentProcessing).waitForExist();
        await $(utilLocators.menu.paymentProcessing).click();
        await func.navigateMenu(utilLocators.menu.payment);
    });
    it('payment', async () => {
        // await func.waitAndClick(locators.fields.dlRadio, 2000);
        await func.waitAndClick(locators.fields.ticketNumberRadio, 2000);
        // await func.waitAndClick(locators.fields.infoNumberRadio, 2000);
        await func.waitAndFill(locators.fields.searchField, paymentTestData.ticketNumber, 2000);
        await func.waitAndClick(locators.button.fetch, 2000);
        await func.waitAndFill(locators.fields.paymentDate, paymentTestData.paymentDate, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndFill(locators.fields.amount, paymentTestData.amount);
        await func.waitAndClick(locators.button.save, 2000);
        // await func.waitAndClick(locators.button.saveAndPrintReceipt, 2000);
        await func.waitAndClick(locators.fields.okPopup, 2000);
        await browser.pause(2000);
    })
});