import * as locators from "../manualTicketLocators"
import * as manualTicketTestData from "../manualTicketTestData"
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
        await func.waitAndFillWithMore(locators.fields.ticketissueDate, manualTicketTestData.issueDate, [Key.Escape]);
        await func.waitAndClick(locators.button.next, 1000);

        //Offender Information

        await func.selectDropdown(locators.fields.idType, 2, locators.fields.idSelect);
        await func.waitAndFill(locators.fields.idNumber, manualTicketTestData.idnumber, 3000, true);
        await func.waitAndFill(locators.fields.idNumberconfirmation, manualTicketTestData.confirmidnumber, 3000, true, [Key.Enter]);
        await browser.pause(3000);
        // await func.waitAndFill(locators.fields.idExpiry, manualTicketTestData.expirationMVRC, 3000);
        // await func.selectDropdown(locators.fields.dlClass, 1, locators.fields.valueSelect);
        // await func.waitAndClick(locators.button.idTypecollapse, 1000);

        // await func.waitAndFill(locators.fields.fname, manualTicketTestData.firstname, 3000, true);
        // await func.waitAndFill(locators.fields.mname, manualTicketTestData.middlename, 3000,true);
        // await func.waitAndFill(locators.fields.lname, manualTicketTestData.lastname, 3000,true);
        // await func.waitAndFill(locators.fields.dob, manualTicketTestData.expirationMVRC, 3000);
        // await func.selectDropdown(locators.fields.gender, 1, locators.fields.valueSelect, true);
        // await func.waitAndClick(locators.button.nameCollapse, 1000);
        // await func.waitAndClick(locators.button.next, 1000);



        // await func.waitAndFill(locators.fields.streetNo, manualTicketTestData.streetnumber, 3000,true);
        // await func.waitAndFill(locators.fields.streetName, manualTicketTestData.sname, 3000, true);
        // await func.waitAndFill(locators.fields.mark, manualTicketTestData.mark, 3000, true);
        // await func.waitAndFill(locators.fields.pobox, manualTicketTestData.pobox, 3000, true);
        // await func.waitAndFill(locators.fields.poname, manualTicketTestData.poname, 3000, true);
        // await func.waitAndFill(locators.fields.parishone, manualTicketTestData.parish11, 3000, true);
        // await func.waitAndFill(locators.fields.city, manualTicketTestData.city, 3000, true);
        // await func.waitAndFill(locators.fields.state, manualTicketTestData.state, 3000,true);
        // await func.waitAndFill(locators.fields.zipcode, manualTicketTestData.zcode, 3000,true);
        // await func.selectDropdown(locators.fields.country, 1, locators.fields.valueSelect, true);
        // await func.waitAndClick(locators.button.addressCollapse, 1000);
        await func.waitAndClick(locators.button.next, 1000);

        //Vehicle Information

        await func.waitAndFill(locators.fields.plateregistrationno, manualTicketTestData.plateregistrationNo, 3000);
        console.log("QA Test");
        // await func.waitForLoaderAndClickNextField();
        await func.selectDropdown(locators.fields.vehicletype, 2, locators.fields.valueSelect, 3000);
        await func.waitAndFill(locators.fields.mvid, manualTicketTestData.mvid, 3000);
        await func.waitAndFill(locators.fields.mvrcno, manualTicketTestData.mvrcno, 3000);
        await func.waitAndFill(locators.fields.expirationmvrs, manualTicketTestData.expirationMVRC, 3000);
        await func.waitAndFill(locators.fields.vehicleyear, manualTicketTestData.year, 3000);
        await func.selectDropdown(locators.fields.vehiclemake, 2, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.vehiclemodel, manualTicketTestData.vehiclemodel, 3000);
        await func.selectDropdown(locators.fields.vehiclecolor1, 2, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.vehiclecolor2, 2, locators.fields.valueSelect);
        await func.waitAndClick(locators.button.next, 1000);

        //Offence Information

        await func.selectDropdown(locators.fields.parish1, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.locationname, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.inthevicinityof, manualTicketTestData.vicinity, 3000);
        await func.waitAndFill(locators.fields.from, manualTicketTestData.from, 3000);
        await func.waitAndFill(locators.fields.to, manualTicketTestData.to, 3000);
        await func.waitAndClick(locators.button.locationbtn, 1000);

        await func.selectDropdown(locators.fields.selectoffence, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.fine, manualTicketTestData.fine, 3000, true);
        await func.waitAndFill(locators.fields.demiritpoints, manualTicketTestData.demiritpoints, 3000, true);
        await func.waitAndFill(locators.fields.offencedesc, manualTicketTestData.offencedesc, 3000, true);
        await func.waitAndFill(locators.fields.comments, manualTicketTestData.comment, 3000);
        await func.waitAndClick(locators.button.offencebtn, 1000);

        await func.selectDropdown(locators.fields.selectzone, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.speeddetectiondevice, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.postalspeed, manualTicketTestData.postalspeed, 3000);
        await func.waitAndFill(locators.fields.recordedspeed, manualTicketTestData.recordedspeed1, 3000);
        await func.waitAndClick(locators.button.zonebtn, 1000);
        await func.waitAndClick(locators.button.next, 1000);

        //Court Information
        await func.selectDropdown(locators.fields.courtlocation, 1, locators.fields.valueSelect);
        //await func.selectDropdown(locators.fields.courtDate, 1, locators.fields.valueSelect, true);
        //await func.waitAndClick(locators.fields.mandatoryCourtAppearance, 1000);
        await func.waitAndClick(locators.button.next, 1000);
        await func.waitAndClick(locators.button.preview, 1000);
        await func.waitAndClick(locators.button.saveTicket, 1000);

        // await func.verifySearch(locators.fields.searchAction, result);
    })

    /*it('Edit Issue eTicket', async () => {   
      await func.waitAndClick(locators.button.editAction, 3000);
      await func.selectDropdown(locators.fields.actionType, 4, locators.fields.valueSelect);
      await func.waitAndClick(locators.button.saveAction, 1000);
    })*/
});