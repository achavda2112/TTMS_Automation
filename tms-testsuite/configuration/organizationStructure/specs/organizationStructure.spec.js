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
    await func.selectDropdown(locators.fields.level, 4, locators.fields.selectLevel);
    await func.selectDropdown(locators.fields.parentMasterValue, 2, locators.fields.selectLevel1);
    result = await func.setUniqueValue(locators.fields.organizationStructurecode, locators.fields.errorCode,5);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.name, organizationStructureTestData.name, 3000);
    await func.waitAndClick(locators.button.saveorganizationStructure, 3000);
  })

  it('Edit Organization Structure', async () => {   
    await func.selectDropdown(locators.fields.organization, 3, locators.fields.selectOrganization);
    await func.selectDropdown(locators.fields.LevelDropdown, 4, locators.fields.selectLevel1);
    await func.waitAndClick(locators.button.applyFilter, 1000);
    await func.verifySearch(locators.fields.searchorganizationStructurecode, result);
    await func.waitAndClick(locators.button.editorganizationStructure, 1000);
    await func.waitAndFill(locators.fields.name, organizationStructureTestData.updateName, 1000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveorganizationStructure, 1000);
  })
  it('Inactive Status', async ()=> {
    await func.selectDropdown(locators.fields.organization, 3, locators.fields.selectOrganization);
    await func.selectDropdown(locators.fields.LevelDropdown, 4, locators.fields.selectLevel);
    await func.waitAndClick(locators.button.applyFilter, 1000);
    await func.verifySearch(locators.fields.searchorganizationStructurecode, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
});