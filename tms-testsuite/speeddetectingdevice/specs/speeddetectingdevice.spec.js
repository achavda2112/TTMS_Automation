import * as locators from "../speeddetectingdeviceLocators"
import * as speeddetectingdeviceTestData from "../speeddetectingdeviceTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


describe('My Login application', () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.speedDetectingDevice);
    await $(locators.button.addDevice).waitForExist();
  });

  
  it('Add speed detecting device', async () => {
    await $(locators.button.addDevice).waitForExist();
    await $(locators.button.addDevice).click()
    await $(locators.fields.description).waitForExist()
    await $(locators.fields.description).setValue(speeddetectingdeviceTestData.description);
    await $(locators.button.saveDevice).click()
    await browser.pause(2000)
  })


  it('Edit speed detecting device', async () => {
    await $(locators.fields.searchDevice).waitForExist();
    await $(locators.fields.searchDevice).setValue(speeddetectingdeviceTestData.description);
    await $(locators.button.editDevice).waitForExist()
    await $(locators.button.editDevice).click()
    await browser.pause(2000);

    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).setValue(speeddetectingdeviceTestData.editdescription);

    await browser.pause(3000);
    await browser.pause(2000)
    await $(locators.button.saveDevice).click()
    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).setValue(speeddetectingdeviceTestData.editdescription);
    await $(locators.button.editDevice).waitForExist();
    const e = $(locators.fields.tddescription)
    expect(e).toHaveValue(speeddetectingdeviceTestData.editdescription, { ignoreCase: false })
        
    await browser.pause(2000)
  })

});