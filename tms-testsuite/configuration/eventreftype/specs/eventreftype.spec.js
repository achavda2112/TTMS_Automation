import * as locators from "../eventreftypeLocators"
import * as eventreftypeTestData from "../eventreftypeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.eventreftype);
    await $(locators.button.addEventreftype).waitForExist();
  });
  
  it('Add eventreftype', async () => {
    await func.waitAndClick(locators.button.addEventreftype, 3000);
    const result = await func.setUniqueValue(locators.fields.eventreftypeCode, locators.fields.errorCode);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.eventreftypeLabel, eventreftypeTestData.eventreftypeLabel, 3000);
    await func.waitAndFill(locators.fields.description, eventreftypeTestData.eventreftypeDescription, 3000);
    await func.waitAndClick(locators.button.saveEventreftype, 1000);
    await func.verifySearch(locators.fields.searchEventreftype, result);
  })

  it('Edit eventreftype', async () => {   
    await func.waitAndClick(locators.button.editEventreftype, 3000);
    await func.waitAndFill(locators.fields.eventreftypeLabel, eventreftypeTestData.editeventreftypeLabel, 3000);
    await func.waitAndFill(locators.fields.description, eventreftypeTestData.editeventreftypeDescription, 3000);
    await func.waitAndClick(locators.button.saveEventreftype, 1000);
  })
});