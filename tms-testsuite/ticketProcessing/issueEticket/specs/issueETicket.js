import * as locators from "../issueETicketLocators"
import * as issueETicketTestData from "../issueETicketTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    // await browser.pause(2000);
    await $(utilLocators.menu.ticketProcessing1).waitForExist();
    await browser.pause(2000);
    await $(utilLocators.menu.ticketProcessing1).click();
    await func.navigateMenu(utilLocators.menu.issueEticket1);
  });
  
  it('Add Issue eTicket', async () => {

    //Ticket Information

    await func.selectDropdown(locators.fields.ticketType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.next, 1000);
  //  await func.selectDate(locators.fields.issuedate, new Date(new Date().setDate(new Date().getDate() + 30, true)));
    await func.waitAndClick(locators.button.next, 1000);

    //Offender Information


    await func.selectDropdown(locators.fields.idType, 1, locators.fields.idSelect);
    await func.waitAndFill(locators.fields.idNumber, issueETicketTestData.idnumber, 3000, false,true);
    // await func.waitAndFill(locators.fields.idExpiry, issueETicketTestData.expirationMVRC, 3000);
    // await func.selectDropdown(locators.fields.dlClass, 1, locators.fields.valueSelect);
    // await func.waitAndClick(locators.button.idTypecollapse, 1000);

    // await func.waitAndFill(locators.fields.fname, issueETicketTestData.firstname, 3000, false,true);
    // await func.waitAndFill(locators.fields.mname, issueETicketTestData.middlename, 3000,false,true);
    // await func.waitAndFill(locators.fields.lname, issueETicketTestData.lastname, 3000,false,true);
    // await func.waitAndFill(locators.fields.dob, issueETicketTestData.expirationMVRC, 3000);
    // await func.selectDropdown(locators.fields.gender, 1, locators.fields.valueSelect, true);
    // await func.waitAndClick(locators.button.nameCollapse, 1000);
   // await func.waitAndClick(locators.button.next, 1000);
    


    // await func.waitAndFill(locators.fields.streetNo, issueETicketTestData.streetnumber, 3000,false,true);
    // await func.waitAndFill(locators.fields.streetName, issueETicketTestData.sname, 3000, false,true);
    // await func.waitAndFill(locators.fields.mark, issueETicketTestData.mark, 3000, false,true);
    // await func.waitAndFill(locators.fields.pobox, issueETicketTestData.pobox, 3000, false,true);
    // await func.waitAndFill(locators.fields.poname, issueETicketTestData.poname, 3000, false,true);
    // await func.waitAndFill(locators.fields.parishone, issueETicketTestData.parish11, 3000, false,true);
    // await func.waitAndFill(locators.fields.city, issueETicketTestData.city, 3000, false,true);
    // await func.waitAndFill(locators.fields.state, issueETicketTestData.state, 3000,false,true);
    // await func.waitAndFill(locators.fields.zipcode, issueETicketTestData.zcode, 3000,false,true);
    // await func.selectDropdown(locators.fields.country, 1, locators.fields.valueSelect, true);
    // await func.waitAndClick(locators.button.addressCollapse, 1000);
    await func.waitAndClick(locators.button.next, 1000);
    await func.waitAndClick(locators.button.next, 1000);

    //Vehicle Information

    await func.waitAndFill(locators.fields.plateregistrationno, issueETicketTestData.plateregistrationNo, 3000);
     console.log("QA Test");
   // await func.waitForLoaderAndClickNextField();
    await func.selectDropdown(locators.fields.vehicletype, 2, locators.fields.valueSelect, 3000);
    await func.waitAndFill(locators.fields.mvid, issueETicketTestData.mvid, 3000);
    await func.waitAndFill(locators.fields.mvrcno, issueETicketTestData.mvrcno, 3000);
    await func.waitAndFill(locators.fields.expirationmvrs, issueETicketTestData.expirationMVRC, 3000);
    await func.waitAndFill(locators.fields.vehicleyear, issueETicketTestData.year, 3000);
    await func.selectDropdown(locators.fields.vehiclemake, 2, locators.fields.valueSelect);
    await func.waitAndFill(locators.fields.vehiclemodel, issueETicketTestData.vehiclemodel, 3000);
    await func.selectDropdown(locators.fields.vehiclecolor1, 2, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.vehiclecolor2, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.next, 1000);
    await func.waitAndClick(locators.button.next, 1000);

    //Offence Information

    await func.selectDropdown(locators.fields.parish1, 1, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.locationname, 1 , locators.fields.valueSelect);
    await func.waitAndFill(locators.fields.inthevicinityof, issueETicketTestData.vicinity, 3000);
    await func.waitAndFill(locators.fields.from, issueETicketTestData.from, 3000);
    await func.waitAndFill(locators.fields.to, issueETicketTestData.to, 3000);

    await func.selectDropdown(locators.fields.selectoffence, 1, locators.fields.valueSelect);
    await func.waitAndFill(locators.fields.fine, issueETicketTestData.fine, 3000, false,true);
    await func.waitAndFill(locators.fields.demiritpoints, issueETicketTestData.demiritpoints, 3000, false,true);
    await func.waitAndFill(locators.fields.offencedesc, issueETicketTestData.offencedesc, 3000, false,true);
    await func.waitAndFill(locators.fields.comments, issueETicketTestData.comment, 3000);
    await func.waitAndClick(locators.button.offencebtn, 1000);
    await func.waitAndClick(locators.button.next, 1000);

    //Court Information
    await func.selectDropdown(locators.fields.courtlocation, 1, locators.fields.valueSelect);
    //await func.selectDropdown(locators.fields.courtDate, 1, locators.fields.valueSelect, true);
    //await func.waitAndClick(locators.fields.mandatoryCourtAppearance, 1000);
    await func.waitAndClick(locators.button.next, 1000);
    await func.waitAndClick(locators.button.preview,1000);
    await func.waitAndClick(locators.button.saveTicket, 1000);

    // await func.verifySearch(locators.fields.searchAction, result);
})

  /*it('Edit Issue eTicket', async () => {   
    await func.waitAndClick(locators.button.editAction, 3000);
    await func.selectDropdown(locators.fields.actionType, 4, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveAction, 1000);
  })*/
});