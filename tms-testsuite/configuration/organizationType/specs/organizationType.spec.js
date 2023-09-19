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
    await func.selectDropdown(locators.fields.organization, 3, locators.fields.selectOrganization);
    await func.selectDropdown(locators.fields.organizationCategory, 3, locators.fields.selectOrganizationcategory);
    await func.waitAndFill(locators.fields.name, organizationTypeTestData.organizationTypename, 3000);
    const result = await func.setUniqueValue(locators.fields.organizationTypecode, locators.fields.errorCode, 10);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.organizationTypelabeltext, organizationTypeTestData.organizationlabeltext, 3000);
    await func.waitAndClick(locators.button.saveorganizationType, 1000);
    await func.verifySearch(locators.fields.searchorganizationType, result);
  })

  it('Edit Organization Type', async () => {   
    await func.waitAndClick(locators.button.editorganizationType, 3000);
    await func.selectDropdown(locators.fields.organizationCategory, 4, locators.fields.selectOrganizationcategory);
    await func.waitAndClick(locators.button.saveorganizationType, 1000);
  })
});