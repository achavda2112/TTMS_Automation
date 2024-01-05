import * as locators from "../draftTicketLocators"
import * as draftTicketTestData from "../draftTicketTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"
import { Key } from 'webdriverio'

describe('My Login application', () => {

    before(async () => {
        await func.login(utilLocators.menu.url, userData.username, userData.password);
        await browser.pause(3000);
        await $(utilLocators.menu.ticketProcessing1).waitForExist();
        await $(utilLocators.menu.ticketProcessing1).click();
        await func.navigateMenu(utilLocators.menu.manualTicket1);
    });

    it('Add Manual eTicket', async () => {

        let result;

        //Ticket Information

        await func.selectDropdown(locators.fields.ticketType, 2, locators.fields.valueSelect);
        await func.waitAndClick(locators.button.next, 1000);
        result = await func.setUniqueValue1(locators.fields.ticketNumber, locators.fields.errorCode, true, 5);
        console.log("-----------Result---------", result);
        await func.waitAndFill(locators.fields.ticketNumberConfirmation, result);
        await func.waitAndFillWithMore(locators.fields.ticketissueDate, draftTicketTestData.issueDate, [Key.Escape]);
        await func.waitAndClick(locators.button.draftTicket);
        await func.verifySearch(locators.fields.searchDraft, result);
        await func.waitAndClick(locators.button.editDraft);
        await func.waitAndClick(locators.button.next, 1000);

        //Offender Information

        await func.selectDropdown(locators.fields.idType, 2, locators.fields.idSelect);
        await func.waitAndFill(locators.fields.idNumber, draftTicketTestData.idnumber, 3000, true);
        await func.waitAndFill(locators.fields.idNumberconfirmation, draftTicketTestData.confirmidnumber, 3000, true);
        await browser.pause(1000);
        // await func.waitAndFill(locators.fields.idExpiry, draftTicketTestData.expirationMVRC, 3000);
        // await func.selectDropdown(locators.fields.dlClass, 1, locators.fields.valueSelect);
        // await func.waitAndClick(locators.button.idTypecollapse, 1000);

        // await func.waitAndFill(locators.fields.fname, draftTicketTestData.firstname, 3000, true);
        // await func.waitAndFill(locators.fields.mname, draftTicketTestData.middlename, 3000,true);
        // await func.waitAndFill(locators.fields.lname, draftTicketTestData.lastname, 3000,true);
        // await func.waitAndFill(locators.fields.dob, draftTicketTestData.expirationMVRC, 3000);
        // await func.selectDropdown(locators.fields.gender, 1, locators.fields.valueSelect, true);
        // await func.waitAndClick(locators.button.nameCollapse, 1000);
        // await func.waitAndClick(locators.button.next, 1000);



        // await func.waitAndFill(locators.fields.streetNo, draftTicketTestData.streetnumber, 3000,true);
        // await func.waitAndFill(locators.fields.streetName, draftTicketTestData.sname, 3000, true);
        // await func.waitAndFill(locators.fields.mark, draftTicketTestData.mark, 3000, true);
        // await func.waitAndFill(locators.fields.pobox, draftTicketTestData.pobox, 3000, true);
        // await func.waitAndFill(locators.fields.poname, draftTicketTestData.poname, 3000, true);
        // await func.waitAndFill(locators.fields.parishone, draftTicketTestData.parish11, 3000, true);
        // await func.waitAndFill(locators.fields.city, draftTicketTestData.city, 3000, true);
        // await func.waitAndFill(locators.fields.state, draftTicketTestData.state, 3000,true);
        // await func.waitAndFill(locators.fields.zipcode, draftTicketTestData.zcode, 3000,true);
        // await func.selectDropdown(locators.fields.country, 1, locators.fields.valueSelect, true);
        // await func.waitAndClick(locators.button.addressCollapse, 1000);
        await func.waitAndClick(locators.button.draftTicket);
        await func.verifySearch(locators.fields.searchDraft, result);
        await func.waitAndClick(locators.button.editDraft);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);

        //Vehicle Information

        await func.waitAndFill(locators.fields.plateregistrationno, draftTicketTestData.plateregistrationNo, 3000);
        console.log("QA Test");
        // await func.waitForLoaderAndClickNextField();
        await func.selectDropdown(locators.fields.vehicletype, 2, locators.fields.valueSelect, 3000);
        await func.waitAndFill(locators.fields.mvid, draftTicketTestData.mvid, 3000);
        await func.waitAndFill(locators.fields.mvrcno, draftTicketTestData.mvrcno, 3000);
        await func.waitAndFill(locators.fields.expirationmvrs, draftTicketTestData.expirationMVRC, 3000);
        await func.waitAndFill(locators.fields.vehicleyear, draftTicketTestData.year, 3000);
        await func.selectDropdown(locators.fields.vehiclemake, 2, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.vehiclemodel, draftTicketTestData.vehiclemodel, 3000);
        await func.selectDropdown(locators.fields.vehiclecolor1, 2, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.vehiclecolor2, 2, locators.fields.valueSelect);
        await func.waitAndClick(locators.button.draftTicket);
        await func.verifySearch(locators.fields.searchDraft, result);
        await func.waitAndClick(locators.button.editDraft);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);

        //Offence Information

        await func.selectDropdown(locators.fields.parish1, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.locationname, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.inthevicinityof, draftTicketTestData.vicinity, 3000);
        await func.waitAndFill(locators.fields.from, draftTicketTestData.from, 3000);
        await func.waitAndFill(locators.fields.to, draftTicketTestData.to, 3000);
        await func.waitAndClick(locators.button.locationbtn, 1000);
        await func.selectDropdown(locators.fields.selectoffence, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.fine, draftTicketTestData.fine, 3000, true);
        await func.waitAndFill(locators.fields.demiritpoints, draftTicketTestData.demiritpoints, 3000, true);
        await func.waitAndFill(locators.fields.offencedesc, draftTicketTestData.offencedesc, 3000, true);
        await func.waitAndFill(locators.fields.comments, draftTicketTestData.comment, 3000);
        await func.waitAndClick(locators.button.offencebtn, 1000);

        await func.selectDropdown(locators.fields.selectzone, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.speeddetectiondevice, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.postalspeed, draftTicketTestData.postalspeed, 1000);
        await func.waitAndFill(locators.fields.recordedspeed, draftTicketTestData.recordedspeed1, 1000);
        await func.waitAndClick(locators.button.zonebtn, 1000);
        await func.waitAndClick(locators.button.draftTicket);
        await func.verifySearch(locators.fields.searchDraft, result);
        await func.waitAndClick(locators.button.editDraft);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);

        //Court Information
        await func.selectDropdown(locators.fields.courtlocation, 1, locators.fields.valueSelect);
        //await func.selectDropdown(locators.fields.courtDate, 1, locators.fields.valueSelect, true);
        //await func.waitAndClick(locators.fields.mandatoryCourtAppearance, 1000);
        await func.waitAndClick(locators.button.draftTicket);
        await func.verifySearch(locators.fields.searchDraft, result);
        await func.waitAndClick(locators.button.editDraft);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.preview, 1000);
        await func.waitAndClick(locators.button.saveAndDuplicate, 1000);
        result = await func.setUniqueValue1(locators.fields.ticketNumber, locators.fields.errorCode, true, 5);
        console.log("-----------Result---------", result);
        await func.waitAndFill(locators.fields.ticketNumberConfirmation, result);
        await func.waitAndClick(locators.button.next, 1000);    
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.locationbtn, 1000);
        await func.selectDropdown(locators.fields.selectoffence, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.comments, draftTicketTestData.comment, 3000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.preview, 1000);
        await func.selectDropdown(locators.fields.ticketSignedByOffender, 2, locators.fields.valueSelect);
        await func.waitAndClick(locators.button.saveTicket, 1000);

        // await func.verifySearch(locators.fields.searchDraft, result);
    })

    /*it('Edit Issue eTicket', async () => {   
      await func.waitAndClick(locators.button.editAction, 3000);
      await func.selectDropdown(locators.fields.actionType, 4, locators.fields.valueSelect);
      await func.waitAndClick(locators.button.saveAction, 1000);
    })*/
});