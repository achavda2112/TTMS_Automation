import * as locators from "../organizationTypeLocators"
import * as organizationTypeTestData from "../organizationTypeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.organizationType);
    await $(locators.button.addorganizationType).waitForExist();
  });
  
  it('Add Organization Type', async () => {
    await func.waitAndClick(locators.button.addorganizationType, 3000);
    await func.selectDropdown(locators.fields.organization, 7, locators.fields.selectOrganization);
    await func.selectDropdown(locators.fields.organizationCategory, 7, locators.fields.selectOrganizationcategory);
    await func.waitAndFill(locators.fields.name, organizationTypeTestData.organizationTypename, 3000);
     result = await func.setUniqueValue(locators.fields.organizationTypecode, locators.fields.errorCode, 10);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.organizationTypelabeltext, organizationTypeTestData.organizationlabeltext, 3000);
    await func.waitAndClick(locators.button.saveorganizationType, 1000);
    await func.verifySearch(locators.fields.searchorganizationType, result);
  })

  it('Edit Or ganization Type', async () => {   
    await func.waitAndClick(locators.button.editorganizationType, 3000);
    await func.waitAndFill(locators.fields.organizationTypelabeltext, organizationTypeTestData.organizationlabeltestedited, 2000)
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveorganizationType, 1000);
  })
 
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchorganizationType, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })

});