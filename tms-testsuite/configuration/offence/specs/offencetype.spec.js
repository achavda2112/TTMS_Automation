import * as locators from "../offencetypeLocators"
import * as offenceTestData from "../offenceTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"

//Author: Akash Chavda 

describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.offenceType);
    await $(locators.button.addoffencetype).waitForExist();
  });

  it('Add Offence Type', async () => {
    await func.waitAndClick(locators.button.addoffencetype, 3000);
    const result = await func.setUniqueValue(locators.fields.offencetypecode, locators.fields.errorCode, false, 3);
    console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.description, offenceTestData.offenceTypeDescription, 3000);
    await func.waitAndFill(locators.fields.offenceshortDescription, offenceTestData.offenceTypeshortDescription, 3000);
    await func.waitAndFill(locators.fields.sectionofAct, offenceTestData.sectionofActData, 3000);
    await func.radioButton(locators.fields.mandatoryCourtAppearance);
    await func.radioButton(locators.fields.zoneRequired);
    await func.waitAndClick(locators.fields.ticketType);
    await func.multiselectDropdown(locators.fields.selectTickettype);

    await func.selectDate(locators.fields.startDate, new Date());
   // await func.selectDate(locators.fields.endDate, new Date(new Date().setDate(new Date().getDate() + 30)));
    await func.waitAndFill(locators.fields.fineAmounts, offenceTestData.fineAmountsvalue,3000);
    await func.waitAndFill(locators.fields.demeritPoints, offenceTestData.demeritPointsvalue,3000);
    await func.waitAndClick(locators.button.saveoffencetype,5000);
    await func.verifySearch(locators.fields.searchoffencetype, result);
  })

   it('Edit Offence Type', async () => {   
     await func.waitAndClick(locators.button.editoffencetype, 3000);
     await func.waitAndFill(locators.fields.description, offenceTestData.editoffenceTypeDescription, 3000);
     await func.radioButton(locators.fields.mandatoryCourtAppearance1);
     await func.radioButton(locators.fields.zoneRequired);
     await func.selectDropdown(locators.fields.inactiveStatus, 2, locators.fields.valueSelect);
     await func.waitAndFill(locators.fields.fineAmounts, offenceTestData.fineAmountsvalue1,3000);
     await func.waitAndFill(locators.fields.demeritPoints, offenceTestData.demeritPointsvalue1,3000);
     await func.waitAndClick(locators.button.saveoffencetype, 5000);
   }) 
   it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchoffencetype, result);
    await func.waitAndClick(locators.fields.inactiveStatus1, 1, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
 }) 
});