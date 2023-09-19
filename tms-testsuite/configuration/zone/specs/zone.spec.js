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
    await func.navigateMenu(utilLocators.menu.addZone);
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
    await func.waitAndClick(locators.button.saveZone, 1000);  
 }) 
})