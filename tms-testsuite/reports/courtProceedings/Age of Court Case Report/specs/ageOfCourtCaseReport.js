import * as locators from "../ageOfCourtCaseReportLocators"
import * as ageOfCourtCaseReportTestData from "../ageOfCourtCaseReportTestData"
import * as userData from "../../../../utils/testData"
import * as func from "../../../../utils/function"
import locator, * as utilLocators from "../../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await $(utilLocators.menu.reports).waitForExist();
        await $(utilLocators.menu.reports).click();
        await $(utilLocators.menu.courtProceedings).waitForExist();
        await $(utilLocators.menu.courtProceedings).click();
        await func.navigateMenu(utilLocators.menu.ageOfCourtCaseReport);
    });
    it('Add API Maintenance', async () => {
        await func.selectDropdown(locators.fields.parish, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.courtDateStart, policeListForCourtAppearanceTestData.courtDateStart, 2000, true);
        await func.waitAndFill(locators.fields.courtDateEnd, policeListForCourtAppearanceTestData.courtDateEnd, 2000, true);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        await browser.pause(3000);
    })
});