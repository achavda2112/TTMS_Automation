import * as locators from "../organizationStructureLocators"
import * as organizationStructureTestData from "../organizationStructureTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.organizationStructure);
    await $(locators.button.addorganizationStructure).waitForExist();
  });
  
  it('Add Organization Structure', async () => {
    await func.waitAndClick(locators.button.addorganizationStructure, 3000);
    await func.selectDropdown(locators.fields.organization, 3, locators.fields.selectOrganization);
    await func.selectDropdown(locators.fields.level, 2, locators.fields.selectLevel);
    const result = await func.setUniqueValue(locators.fields.organizationStructurecode, locators.fields.errorCode,5);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.name, organizationStructureTestData.name, 3000);
    await func.waitAndClick(locators.button.saveorganizationStructure, 3000);
   // await func.verifySearch(locators.fields.searchorganizationStructurecode, result);
  })

  it('Edit Organization Structure', async () => {   
    await func.selectDropdown(locators.fields.organization, 3, locators.fields.selectOrganization);
    await func.selectDropdown(locators.fields.level, 2, locators.fields.selectLevel);
    await func.waitAndClick(locators.button.applyFilter, 3000);
    await func.verifySearch(locators.fields.searchorganizationStructurecode, result);
    await func.waitAndClick(locators.button.editorganizationStructure, 3000);
    await func.waitAndFill(locators.fields.name, organizationStructureTestData.updateName, 3000);
    await func.waitAndClick(locators.button.saveorganizationStructure, 1000);
  })
});