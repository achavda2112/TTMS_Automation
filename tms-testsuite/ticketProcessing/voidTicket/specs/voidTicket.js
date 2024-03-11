import * as locators from "../voidTicketLocators"
import * as voidTicketTestData from "../voidTicketTestData"
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
        result = await func.setUniqueValue(locators.fields.ticketNumber, locators.fields.errorCode, true, 5, "MT");
        console.log("-----------Result---------", result);
        await func.waitAndFill(locators.fields.ticketNumberConfirmation, result);
        await func.waitAndFill(locators.fields.ticketissueDate, voidTicketTestData.issueDate, true);
        await func.selectDropdown(locators.fields.voidTicket, 2, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.voidReason, 2, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.voidComments, voidTicketTestData.comment, 3000);
        // const fileInput = await browser.$(locators.button.fileUpload);
        // const filePath = '/home/akash/Pictures/Screenshots/Screenshot from 2023-12-14 11-26-46.png';
        // await fileInput.addValue(filePath);
        await func.waitAndClick(locators.button.next, 1000);

        //Offender Information

        await func.selectDropdown(locators.fields.idType, 2, locators.fields.idSelect);
        await func.waitAndFill(locators.fields.idNumber, voidTicketTestData.idnumber, 3000, false,true);
        await func.waitAndFill(locators.fields.idNumberconfirmation, voidTicketTestData.confirmidnumber, 3000, false,true);
        await browser.pause(1000);
        // await func.waitAndFill(locators.fields.idExpiry, voidTicketTestData.expirationMVRC, 3000);
        // await func.selectDropdown(locators.fields.dlClass, 1, locators.fields.valueSelect);
        // await func.waitAndClick(locators.button.idTypecollapse, 1000);

        // await func.waitAndFill(locators.fields.fname, voidTicketTestData.firstname, 3000, false,true);
        // await func.waitAndFill(locators.fields.mname, voidTicketTestData.middlename, 3000,false,true);
        // await func.waitAndFill(locators.fields.lname, voidTicketTestData.lastname, 3000,false,true);
        // await func.waitAndFill(locators.fields.dob, voidTicketTestData.expirationMVRC, 3000);
        // await func.selectDropdown(locators.fields.gender, 1, locators.fields.valueSelect, true);
        // await func.waitAndClick(locators.button.nameCollapse, 1000);
        // await func.waitAndClick(locators.button.next, 1000);



        // await func.waitAndFill(locators.fields.streetNo, voidTicketTestData.streetnumber, 3000,false,true);
        // await func.waitAndFill(locators.fields.streetName, voidTicketTestData.sname, 3000, false,true);
        // await func.waitAndFill(locators.fields.mark, voidTicketTestData.mark, 3000, false,true);
        // await func.waitAndFill(locators.fields.pobox, voidTicketTestData.pobox, 3000, false,true);
        // await func.waitAndFill(locators.fields.poname, voidTicketTestData.poname, 3000, false,true);
        // await func.waitAndFill(locators.fields.parishone, voidTicketTestData.parish11, 3000, false,true);
        // await func.waitAndFill(locators.fields.city, voidTicketTestData.city, 3000, false,true);
        // await func.waitAndFill(locators.fields.state, voidTicketTestData.state, 3000,false,true);
        // await func.waitAndFill(locators.fields.zipcode, voidTicketTestData.zcode, 3000,false,true);
        // await func.selectDropdown(locators.fields.country, 1, locators.fields.valueSelect, true);
        // await func.waitAndClick(locators.button.addressCollapse, 1000);
        await func.waitAndClick(locators.button.next, 1000);

        //Vehicle Information

        await func.waitAndFill(locators.fields.plateregistrationno, voidTicketTestData.plateregistrationNo, 3000);
        console.log("QA Test");
        // await func.waitForLoaderAndClickNextField();
        await func.selectDropdown(locators.fields.vehicletype, 2, locators.fields.valueSelect, 3000);
        await func.waitAndFill(locators.fields.mvid, voidTicketTestData.mvid, 3000);
        await func.waitAndFill(locators.fields.mvrcno, voidTicketTestData.mvrcno, 3000);
        await func.waitAndFill(locators.fields.expirationmvrs, voidTicketTestData.expirationMVRC, 3000);
        await func.waitAndFill(locators.fields.vehicleyear, voidTicketTestData.year, 3000);
        await func.selectDropdown(locators.fields.vehiclemake, 2, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.vehiclemodel, voidTicketTestData.vehiclemodel, 3000);
        await func.selectDropdown(locators.fields.vehiclecolor1, 2, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.vehiclecolor2, 2, locators.fields.valueSelect);
        await func.waitAndClick(locators.button.next, 1000);

        //Offence Information

        await func.selectDropdown(locators.fields.parish1, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.locationname, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.inthevicinityof, voidTicketTestData.vicinity, 3000);
        await func.waitAndFill(locators.fields.from, voidTicketTestData.from, 3000);
        await func.waitAndFill(locators.fields.to, voidTicketTestData.to, 3000);
        await func.waitAndClick(locators.button.locationbtn, 1000);

        await func.selectDropdown(locators.fields.selectoffence, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.fine, voidTicketTestData.fine, 3000, true);
        await func.waitAndFill(locators.fields.demiritpoints, voidTicketTestData.demiritpoints, 3000, true);
        await func.waitAndFill(locators.fields.offencedesc, voidTicketTestData.offencedesc, 3000, true);
        await func.waitAndFill(locators.fields.comments, voidTicketTestData.comment, 3000);
        await func.waitAndClick(locators.button.offencebtn, 1000);

        await func.selectDropdown(locators.fields.selectzone, 1, locators.fields.valueSelect);
        await func.selectDropdown(locators.fields.speeddetectiondevice, 1, locators.fields.valueSelect);
        await func.waitAndFill(locators.fields.postalspeed, voidTicketTestData.postalspeed, 3000);
        await func.waitAndFill(locators.fields.recordedspeed, voidTicketTestData.recordedspeed1, 3000);
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