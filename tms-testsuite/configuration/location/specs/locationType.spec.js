import * as locators from "../locationLocators"
import * as locationTestData from "../locationTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.location);
    await $(locators.button.addlocationtype).waitForExist();
  });
  
  it('Add location', async () => {
    await func.waitAndClick(locators.button.addlocationtype, 3000);
    await func.selectDropdown(locators.fields.locationParish, 1);    
    await func.waitAndFill(locators.fields.description, locationTestData.locationDescription, 3000);
    await func.waitAndClick(locators.button.savelocationtype, 1000);
    await func.verifySearch(locators.fields.searchlocationtype, locationTestData.locationDescription);
  });

 it('Edit Location', async () => {   
    await func.waitAndClick(locators.button.editlocationtype, 3000);
    await func.waitAndFill(locators.fields.description, locationTestData.editlocationDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect); 
    await func.waitAndClick(locators.button.savelocationtype, 1000);
});

 it('Inactive Status', async ()=> {
  await func.verifySearch(locators.fields.searchlocationtype, locationTestData.editlocationDescription);
  await func.waitAndClick(locators.fields.inactiveStatus, 3000);
  await func.waitAndClick(locators.fields.acceptAlert, 3000);
})
});