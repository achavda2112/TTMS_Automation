import * as locators from "../deliverDlToItaLocators"
import * as deliverDlToItaTestData from "../deliverDlToItaTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"
import { Key } from 'webdriverio'


describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.courtProcessing).waitForExist();
        await $(utilLocators.menu.courtProcessing).click();
        await func.navigateMenu(utilLocators.menu.deliverDlToIta);
    });

    it('Filter DL', async () => {
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClear(locators.fields.deliveryDate, 10, 1000);
        await browser.keys([Key.Escape]);
        await browser.pause(3000);
        await func.waitAndFillWithMore(locators.fields.deliveryDate, deliverDlToItaTestData.deliveryDate, 2000);
})
    it('Deliver DL', async () => {
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.button.submitAndPrint, 2000);
        await browser.pause(3000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});

