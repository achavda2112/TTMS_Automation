import * as locators from "../zoneLocators"
import * as zoneTestData from "../zoneTestData"

import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

describe('My Login application', () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.addZone);
    await $(locators.button.addZone).waitForExist();
  });


  it('Add zone', async () => {
    await $(locators.button.addZone).waitForExist()
    await $(locators.button.addZone).click()
    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).setValue(zoneTestData.description);
    await $(locators.button.saveZone).waitForExist()
    await $(locators.button.saveZone).click()
    await browser.pause(2000)
     
    await $(locators.fields.searchZone).waitForExist();
    await $(locators.fields.searchZone).setValue(zoneTestData.description);
    await $(locators.fields.tddescription).waitForExist();
    await browser.pause(2000)
  })

  it('Edit zone', async () => {
    await $(locators.fields.searchZone).waitForExist();
    await $(locators.fields.searchZone).setValue(zoneTestData.description);
    await $(locators.fields.editZone).waitForExist()
    await $(locators.fields.editZone).click()
    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).clearValue()
    await $(locators.fields.description).setValue(zoneTestData.editdescription);
         
    await browser.pause(2000)
    await $(locators.button.saveZone).click()
    await $(locators.fields.searchZone).waitForExist();
    await $(locators.fields.searchZone).setValue(zoneTestData.editdescription)
    await $(locators.fields.tddescription).waitForExist();
    const e = $(locators.fields.tddescription)
    expect(e).toHaveValue(zoneTestData.editdescription, { ignoreCase: false })
    
    await $(locators.button.addZone).waitForExist();
    await browser.pause(2000)
   
  })
})