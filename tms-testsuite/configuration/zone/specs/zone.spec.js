import * as locators from "../zoneLocators"
import * as zoneTestData from "../zoneTestData"

import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await browser.pause(2000);
    await func.navigateMenu(utilLocators.menu.zone);
    await $(locators.button.addZone).waitForExist();
  });


  it('Add zone', async () => {
    await func.waitAndClick(locators.button.addZone, 3000);
    await func.waitAndFill(locators.fields.description, zoneTestData.description, 3000);
    await func.waitAndClick(locators.button.saveZone, 1000);
    await func.verifySearch(locators.fields.searchZone, zoneTestData.description);
  })

  it('Edit zone', async () => {
    await func.waitAndClick(locators.button.editZone, 3000);
    await func.waitAndFill(locators.fields.description, zoneTestData.editdescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveZone, 1000);  
 }) 
 it('Inactive Status', async ()=> {
  await func.verifySearch(locators.fields.searchZone, zoneTestData.editdescription);
  await func.waitAndClick(locators.fields.inactiveStatus, 3000);
  await func.waitAndClick(locators.fields.acceptAlert, 3000);
})
})