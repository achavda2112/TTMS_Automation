import * as locators from "../warrantProcessingLocators"
import * as warrantProcessingTestData from "../warrantProcessingTestData"
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
        await func.navigateMenu(utilLocators.menu.warrantProcessing);
    });

    it('Warrant Enquiry', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);
        await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.notprinted, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
    })

    it('Dispatched to police', async () => {
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.dispatchBy, warrantProcessingTestData.dispatchedBy, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);  
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.policeOfficer, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.dispatchBy, warrantProcessingTestData.dispatchedBy, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);    
    })

    it('Received By police', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);
        await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 2, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.receivedByOfficer, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);  
    })

    it('Assigned to officer', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);
        await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 5, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.both, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.assignedBy, 2, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.assignedToPoliceStation, 1, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.assignedTo, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);    

    })

    it('Executed Warrant', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);
        await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 8, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.both, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.executedBy, warrantProcessingTestData.executedBy, 2000);
        await func.waitAndFill(locators.fields.location, warrantProcessingTestData.location, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
    it('Return to Court', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);            await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 4, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.both, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.selectDropdown(locators.fields.activity, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.returnedBy, warrantProcessingTestData.returnedBy, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);    
    })

        it('Recieve By Court', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);
        await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 3, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.both, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.receivedBy, warrantProcessingTestData.receivedBy, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })

        it('Vacate Order', async () => {
        await func.waitAndFill(locators.fields.warrantrefno, warrantProcessingTestData.warrrantRefNumber, 2000);
        await func.waitAndFillWithMore(locators.fields.warrantIssueDateEnd, warrantProcessingTestData.warrantIssueEndDate, 2000);
        await func.waitAndFill(locators.fields.dlNumber, warrantProcessingTestData.dlNumber, 2000);
        await func.selectDropdown(locators.fields.issuingMagistrate, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.offenderName, warrantProcessingTestData.offenderName, 2000);
        await func.selectDropdown(locators.fields.workflowState, 3, locators.fields.valueSelect, 2000);
        await func.selectDropdown(locators.fields.courtIssuedBy, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.fields.both, 2000);
        await func.selectDropdown(locators.fields.policeStation, 1, locators.fields.valueSelect, 2000);
        await func.waitAndClick(locators.button.applyfilter, 2000);
        await func.waitAndClick(locators.fields.checkBox, 2000);
        await func.waitAndClick(locators.fields.referenceNumber, 2000);
        await func.waitAndClick(locators.fields.activityTab, 2000);
        await func.selectDropdown(locators.fields.activity, 2, locators.fields.valueSelect, 2000);
        await func.waitAndFillWithMore(locators.fields.activityDate, warrantProcessingTestData.activityDate, 2000);
        await func.selectDropdown(locators.fields.court, 1, locators.fields.valueSelect, 2000);
        await func.waitAndFill(locators.fields.cancelledBy, warrantProcessingTestData.cancelledBy, 2000);
        await func.waitAndFill(locators.fields.comments, warrantProcessingTestData.comments, 2000);
        await func.waitAndClick(locators.button.save, 2000);
    })
})