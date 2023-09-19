import * as locators from "../actionLocators"
import * as actionTestData from "../actionTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.action);
    await $(locators.button.addAction1).waitForExist();
  });
  
  it('Add Action', async () => {
    await func.waitAndClick(locators.button.addAction1, 3000);
    const result = await func.setUniqueValue(locators.fields.actioncode, locators.fields.errorCode,true, 2);
    console.log("-----------Result---------",result);
    await func.selectDropdown(locators.fields.actionType, 3, locators.fields.valueSelect);
    await func.waitAndFill(locators.fields.description, actionTestData.actionDescription, 3000);
    await func.waitAndClick(locators.button.saveAction, 1000);
   await func.verifySearch(locators.fields.searchAction, result);
  })

  it('Edit Action', async () => {   
    await func.waitAndClick(locators.button.editAction, 3000);
    await func.selectDropdown(locators.fields.actionType, 4, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveAction, 1000);
  })
});