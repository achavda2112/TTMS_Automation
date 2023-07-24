import * as locators from "../actiontypeLocators"
import * as actiontypeTestData from "../actiontypeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.actiontype);
    await $(locators.button.addActiontype).waitForExist();
  });
  
  it('Add actiontype', async () => {
    await func.waitAndClick(locators.button.addActiontype, 3000);
    await func.waitAndFill(locators.fields.actiontypecode, actiontypeTestData.actionTypeCode, 3000);
    await func.waitAndFill(locators.fields.description, actiontypeTestData.actionTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveActiontype, 1000);
    await func.verifySearch(locators.fields.searchActiontype, actiontypeTestData.actionTypeDescription);
  })

  it('Edit actiontype', async () => {   
    await func.verifySearch(locators.fields.searchActiontype, actiontypeTestData.actionTypeDescription);
    await func.waitAndClick(locators.button.editActiontype, 3000);
    await func.waitAndFill(locators.fields.description, actiontypeTestData.editactionTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveActiontype, 1000);
    await func.verifySearch(locators.fields.searchActiontype, actiontypeTestData.editactionTypeDescription);
  })
});