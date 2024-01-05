import * as locators from "../actiontypeLocators"
import * as actiontypeTestData from "../actiontypeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.actiontype);
    await $(locators.button.addActiontype).waitForExist();
  });
  
  it('Add actiontype', async () => {
    await func.waitAndClick(locators.button.addActiontype, 3000);
    const result = await func.setUniqueValue(locators.fields.actiontypecode, locators.fields.errorCode,true);
    console.log("-----------Result---------",result);
    //await func.waitAndFill(locators.fields.actiontypecode, actiontypeTestData.actionTypeCode, 3000);
    await func.waitAndFill(locators.fields.description, actiontypeTestData.actionTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveActiontype, 1000);
    await func.verifySearch(locators.fields.searchActiontype, result);
  })

 it('Edit actiontype', async () => {   
    await func.waitAndClick(locators.button.editActiontype, 3000);
    await func.waitAndFill(locators.fields.description, actiontypeTestData.editactionTypeDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveActiontype, 1000);
  }) 

  it('Inactive Status', async ()=> {
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })   
});