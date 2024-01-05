import * as locators from "../speeddetectingdeviceLocators"
import * as speeddetectingdeviceTestData from "../speeddetectingdeviceTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
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
    await func.waitAndClick(locators.button.editDevice, 3000);
    await func.waitAndFill(locators.fields.description, speeddetectingdeviceTestData.editdescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveDevice, 1000);
  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchDevice, speeddetectingdeviceTestData.description);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
});