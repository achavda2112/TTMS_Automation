import * as locators from "../offenderProfilelocators"
import * as offenderProfileTestData from "../offenderProfileTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"
import { Key } from 'webdriverio'



describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.ticketProcessing1).waitForExist();
    await $(utilLocators.menu.ticketProcessing1).click();
    await browser.pause(2000);
    await func.navigateMenu(utilLocators.menu.offenderProfile);
  });
   it('Filter offender', async () => {
    await func.waitAndFill(locators.fields.idNumber, offenderProfileTestData.idNumber, 3000);
    await func.waitAndFill(locators.fields.ticketNumber, offenderProfileTestData.ticketNumber, 3000);
    await func.waitAndFill(locators.fields.plateNumber, offenderProfileTestData.plateRegistrationNo, 3000);
    await func.waitAndFill(locators.fields.firstName, offenderProfileTestData.offenderFirstName, 3000);
    await func.waitAndFill(locators.fields.middleName, offenderProfileTestData.offenderMiddleName, 3000);
    await func.waitAndFill(locators.fields.lastName, offenderProfileTestData.offenderLastName, 3000);
    await func.waitAndClick(locators.button.applyFilter, 1000);    
})
  it('Action on result', async () => {
    await func.waitAndClick(locators.fields.action, 1000);
    await func.waitAndClick(locators.button.personalcollaps, 1000);
    await func.waitAndClick(locators.button.dlCollaps, 1000);
    await func.waitAndClick(locators.fields.ticketNUmber1, 1000);
    await func.waitAndClick(locators.button.ticket, 1000);
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1]);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0])
    await func.waitAndClick(locators.button.demeritPoint, 1000);
    await func.waitAndClick(locators.button.disqualification, 1000);
    await func.waitAndClick(locators.button.warrant, 1000); 
})

   })