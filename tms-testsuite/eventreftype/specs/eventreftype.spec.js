import * as locators from "../eventreftypeLocators"
import * as eventreftypeTestData from "../eventreftypeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.eventreftype);
    await $(locators.button.addEventreftype).waitForExist();
  });
  
  it('Add eventreftype', async () => {
    await func.waitAndClick(locators.button.addEventreftype, 3000);
    await func.waitAndFill(locators.fields.eventreftypeCode, eventreftypeTestData.eventreftypeCode, 3000);
    await func.waitAndFill(locators.fields.eventreftypeLabel, eventreftypeTestData.eventreftypeLabel, 3000);
    await func.waitAndFill(locators.fields.description, eventreftypeTestData.eventreftypeDescription, 3000);
    await func.waitAndClick(locators.button.saveEventreftype, 1000);
    await func.verifySearch(locators.fields.searchEventreftype, eventreftypeTestData.eventreftypeDescription);
  })

  it('Edit eventreftype', async () => {   
    await func.verifySearch(locators.fields.searchEventreftype, eventreftypeTestData.eventDescription);
    await func.waitAndClick(locators.button.editEventreftype, 3000);
    await func.waitAndFill(locators.fields.eventreftypeLabel, eventreftypeTestData.editeventreftypeLabel, 3000);
    await func.waitAndFill(locators.fields.description, eventreftypeTestData.editeventreftypeDescription, 3000);
    await func.waitAndClick(locators.button.saveEventreftype, 1000);
    await func.verifySearch(locators.fields.searchEventreftype, eventreftypeTestData.editeventreftypeDescription);
  })
});