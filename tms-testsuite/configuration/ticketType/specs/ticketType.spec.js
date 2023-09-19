import * as locators from "../tickettypeLocators"
import * as tickettypeTestData from "../tickettypeTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.ticketType);
    await $(locators.button.addticketType).waitForExist();
  });
  
  it('Add event', async () => {
    await func.waitAndClick(locators.button.addticketType, 3000);
    const result = await func.setUniqueValue(locators.fields.tickettypecode, locators.fields.errorCode,6);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.tickettypename, tickettypeTestData.ticketTypename, 3000);
    await func.waitAndFill(locators.fields.description, tickettypeTestData.ticketTypeDescription, 3000);
    await func.waitAndFill(locators.fields.ticketnoprefix, tickettypeTestData.eticketprefix, 3000);
    await func.waitAndFill(locators.fields.ticketnolength, tickettypeTestData.eticketlength, 3000);
    await func.waitAndFill(locators.fields.manualticketnoprefix, tickettypeTestData.manualticketPrefix, 3000);
    await func.waitAndFill(locators.fields.manualticketnolength, tickettypeTestData.manualticketlength, 3000);
    await func.waitAndFill(locators.fields.paymentDeadline, tickettypeTestData.paymentDeadline, 3000);
    await func.waitAndFill(locators.fields.noofdaysforcourtdate, tickettypeTestData.courtdatedeadline, 3000);
    await func.waitAndClick(locators.fields.mvInfo);
    await func.waitAndClick(locators.fields.licencenoRequired);
    await func.waitAndClick(locators.fields.idType);
    await func.waitAndClick(locators.fields.idtypeSelect1);
    await func.waitAndClick(locators.fields.idtypeSelect2);
    await func.waitAndClick(locators.button.saveticketType, 1000);
    await func.verifySearch(locators.fields.searchEvent, result);
  })

  it('Edit event', async () => {   
    await func.waitAndClick(locators.button.editEvent, 3000);
    await func.waitAndFill(locators.fields.description, eventTestData.editeventDescription, 3000);
    await func.waitAndClick(locators.button.saveEvent, 1000);
  })
});