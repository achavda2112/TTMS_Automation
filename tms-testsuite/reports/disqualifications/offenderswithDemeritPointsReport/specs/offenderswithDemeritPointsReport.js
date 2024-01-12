import * as locators from "../offenderswithDemeritPointsReportLocators"
import * as offenderswithDemeritPointsReportTestData from "../offenderswithDemeritPointsReportTestData"
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
        await $(utilLocators.menu.menu_item_disqualifications).waitForExist();
        await $(utilLocators.menu.menu_item_disqualifications).click();
        await func.navigateMenu(utilLocators.menu.menuItemOffendersWithDemeritPoints);
    });
    it('Add API Maintenance', async () => {
        await func.waitAndFill(locators.fields.demeritPointsStart, offenderswithDemeritPointsReportTestData.demeritPointsStart, 2000);
        await func.waitAndFillWithMore(locators.fields.demeritPointsEnd, offenderswithDemeritPointsReportTestData.demeritPointsEnd, 2000);
        // await func.selectDropdown(locators.fields.sortBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});