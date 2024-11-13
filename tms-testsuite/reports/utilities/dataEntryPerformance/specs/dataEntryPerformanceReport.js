import * as locators from "../dataEntryPerformanceLocators"
import * as dataEntryPerformanceTestData from "../dataEntryPerformanceTestData"
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
        await $(utilLocators.menu.menu_item_utitlies).waitForExist();
        await $(utilLocators.menu.menu_item_utitlies).click();
        await func.navigateMenu(utilLocators.menu.menu_item_data_entry_performance);
    });
    it('Search Filter', async () => {
        await func.waitAndFill(locators.fields.dateRangeStart, dataEntryPerformanceTestData.dateRangeStart, 2000, true);
        await func.waitAndFill(locators.fields.dateRangeEnd, dataEntryPerformanceTestData.dateRangeEnd, 2000, true);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
    })
});