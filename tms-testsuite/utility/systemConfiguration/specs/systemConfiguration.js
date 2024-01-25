import * as locators from "../systemConfigurationLocators"
import * as systemConfigurationTestData from "../systemConfigurationTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.utilities).waitForExist();
        await $(utilLocators.menu.utilities).click();
        await func.navigateMenu(utilLocators.menu.systemConfiguration);
    });
    it('Add Email Group', async () => {
        await func.selectDropdown(locators.fields.dateFormat, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.collectorate, systemConfigurationTestData.collectorate, 2000);
        await func.waitAndFill(locators.fields.magistrate, systemConfigurationTestData.magistrate, 2000);
        await func.waitAndClick(locators.fields.isCodeDisabledYes, 2000);
        await func.waitAndFill(locators.fields.daysBeforeVoidTicket, systemConfigurationTestData.daysBeforeVoidTicket, 2000);
        await func.waitAndFill(locators.fields.enforcementOfficer, systemConfigurationTestData.enforcementOfficerRoleName, 2000);
        await func.waitAndFill(locators.fields.prepareCourtSheetPreviousDays, systemConfigurationTestData.prepareCourtSheetPreviousDays, 2000);
        await func.waitAndFill(locators.fields.prepareCourtSheetNextDays, systemConfigurationTestData.prepareCourtSheetNextDays, 2000);
        await func.waitAndFill(locators.fields.prepareCourtSheetMaxRecordsToFetch, systemConfigurationTestData.maxRecordsToBeFetched, 2000);
        await func.waitAndClick(locators.fields.isDisplayExpungePointFieldTrue, 2000);
        await func.waitAndClick(locators.fields.isDefaultValueForExpungePointFieldTrue, 2000);
        await func.waitAndFill(locators.fields.minDaysForDisqualificationConfirmation, systemConfigurationTestData.minimumDaysForDisqualificationConfirmation, 2000);
        await func.waitAndFill(locators.fields.maxDaysForDisqualificationConfirmation, systemConfigurationTestData.maximumDaysForDisqualificationConfirmation, 2000);
        await func.waitAndClick(locators.fields.allowedFileTypesForLogo, 2000);
        await func.waitAndClick(locators.fields.CheckAll, 2000);
        await func.waitAndClick(locators.fields.allowedFileTypesForDocument, 2000);
        await func.waitAndFill(locators.fields.maxFileSizeInMbForDocument, systemConfigurationTestData.maximumFileSizeForDocument, 2000);
        await func.waitAndClick(locators.fields.CheckAll, 2000);
        await func.waitAndFill(locators.fields.endorsementRemovalPeriodInMonths, systemConfigurationTestData.endorsementRemovalPeriod, 2000);
        await func.waitAndFill(locators.fields.daysBeforeDraftTicketPurge, systemConfigurationTestData.daysBeforePurgingDraftTicket, 2000);
        await func.waitAndFill(locators.fields.monthsBeforeDemeritPointExpire, systemConfigurationTestData.numberOfMonthsBeforeExpiringDemeritPointsOfOffender, 2000);
        await func.waitAndFill(locators.fields.daysDifferenceForReport, systemConfigurationTestData.NumberOfDaysDifferenceBetweenStartAndEndDateForReport, 2000);
        await func.waitAndFill(locators.fields.maxLengthForDisplayingDataInTable, systemConfigurationTestData.maxLengthForDisplayingDataInTable, 2000);
        await func.waitAndClick(locators.button.save, 2000);
        await browser.pause(2000);
    })
});