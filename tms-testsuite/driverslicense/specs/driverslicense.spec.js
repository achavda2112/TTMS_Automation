import * as locators from "../driverslicenseLocators"
import * as driverslicenseTestData from "../driverslicenseTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.driverslicense);
    await $(locators.button.addDriverslicense).waitForExist();
  });
  
  it('Add court hearing type', async () => {
    await func.waitAndClick(locators.button.addDriverslicense, 3000);
    await func.waitAndFill(locators.fields.driverslicenseCode, driverslicenseTestData.driverslicenseCode, 3000);
    await func.waitAndFill(locators.fields.description, driverslicenseTestData.driverslicenseDescription, 3000);
    await func.waitAndClick(locators.button.saveDriverslicense, 1000);
    await func.verifySearch(locators.fields.searchDriverslicense, driverslicenseTestData.driverslicenseDescription);
  })

  it('Edit court hearing type', async () => {   
    await func.verifySearch(locators.fields.searchDriverslicense, driverslicenseTestData.driverslicenseDescription);
    await func.waitAndClick(locators.button.editDriverslicense, 3000);
    await func.waitAndFill(locators.fields.description, driverslicenseTestData.editdriverslicenseDescription, 3000);
    await func.waitAndClick(locators.button.saveDriverslicense, 1000);
    await func.verifySearch(locators.fields.searchDriverslicense, driverslicenseTestData.editdriverslicenseDescription);
  })
});