import * as locators from "../offendertypeLocators"
import * as offendertypeTestData from "../offendertypeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.offendertype);
    await $(locators.button.addOffendertype).waitForExist();
  });
  
  it('Add offendertype', async () => {
    await func.waitAndClick(locators.button.addOffendertype, 3000);
    await func.waitAndFill(locators.fields.description, offendertypeTestData.offenderTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveOffendertype, 1000);
    await func.verifySearch(locators.fields.searchOffendertype, offendertypeTestData.offenderTypeDescription);
  })

  it('Edit offendertype', async () => {   
    await func.waitAndClick(locators.button.editOffendertype, 3000);
    await func.waitAndFill(locators.fields.description, offendertypeTestData.editoffenderTypeDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveOffendertype, 1000); 
  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchOffendertype, offendertypeTestData.offenderTypeDescription);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000); 
  
  })
});