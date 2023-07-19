import * as locators from "../speeddetectingdeviceLocators"
import * as speeddetectingdeviceTestData from "../speeddetectingdeviceTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.speedDetectingDevice);
    await $(locators.button.addDevice).waitForExist();
  });

  
  it('Add speed detecting device', async () => {
    await func.waitAndClick(locators.button.addDevice, 3000);
    await func.waitAndFill(locators.fields.description, speeddetectingdeviceTestData.description, 3000);
    await func.waitAndClick(locators.button.saveDevice, 1000);
    await func.verifySearch(locators.fields.searchDevice, speeddetectingdeviceTestData.description);
  })


  it('Edit speed detecting device', async () => {
    await func.verifySearch(locators.fields.searchDevice, speeddetectingdeviceTestData.description);
    await func.waitAndClick(locators.button.editDevice, 3000);
    await func.waitAndFill(locators.fields.description, speeddetectingdeviceTestData.editdescription, 3000);
    await func.waitAndClick(locators.button.saveDevice, 1000);
    await func.verifySearch(locators.fields.searchDevice, speeddetectingdeviceTestData.description);   
    await func.verifyText(locators.fields.tddescription, speeddetectingdeviceTestData.description);
  })
});