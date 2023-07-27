import * as locators from "../courthearingtypeLocators"
import * as courthearingtypeTestData from "../courthearingtypeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.courthearingtype);
    await $(locators.button.addcourthearingtype).waitForExist();
  });
  
  it('Add court hearing type', async () => {
    await func.waitAndClick(locators.button.addcourthearingtype, 3000);
    await func.waitAndFill(locators.fields.courthearingtypeCode, courthearingtypeTestData.courthearingtypeCode, 3000);
    await func.waitAndFill(locators.fields.description, courthearingtypeTestData.courthearingtypeDescription, 3000);
    await func.waitAndClick(locators.button.savecourthearingtype, 1000);
    await func.verifySearch(locators.fields.searchcourthearingtype, courthearingtypeTestData.courthearingtypeDescription);
  })

  it('Edit court hearing type', async () => {   
    await func.verifySearch(locators.fields.searchcourthearingtype, courthearingtypeTestData.courthearingtypeDescription);
    await func.waitAndClick(locators.button.editcourthearingtype, 3000);
    await func.waitAndFill(locators.fields.description, courthearingtypeTestData.editcourthearingtypeDescription, 3000);
    await func.waitAndClick(locators.button.savecourthearingtype, 1000);
    await func.verifySearch(locators.fields.searchcourthearingtype, courthearingtypeTestData.editcourthearingtypeDescription);
  })
});