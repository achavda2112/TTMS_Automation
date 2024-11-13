import * as locators from "../aggregateDisqualificationReportLocators"
import * as aggregateDisqualificationReportTestData from "../aggregateDisqualificationReportTestData"
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
        await browser.pause(2000);
        await $(utilLocators.menu.aggregateDisqualificationReport).waitForExist();
        await $(utilLocators.menu.aggregateDisqualificationReport).click();
    });
    it('Generat sggregatedisqualificationReport', async () => {
        await func.selectDropdown(locators.fields.offence, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.dateRangeStart, aggregateDisqualificationReportTestData.offenceDateStart, 2000, true);
        await func.waitAndFill(locators.fields.dateRangeEnd, aggregateDisqualificationReportTestData.offenceDateEnd, 2000, true);
        await func.waitAndFill(locators.fields.disqualificationDateStart, aggregateDisqualificationReportTestData.disqualificationDateStart, 2000, true);
        await func.waitAndFill(locators.fields.disqualificationDateEnd, aggregateDisqualificationReportTestData.disqualificationDateEnd, 2000, true);
        await func.waitAndFill(locators.fields.duration, aggregateDisqualificationReportTestData.duration, 2000, true);
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.generateReport, 2000);
        await browser.pause(2000);
    })
});