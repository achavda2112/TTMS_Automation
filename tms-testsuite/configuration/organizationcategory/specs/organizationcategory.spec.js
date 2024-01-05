import * as locators from "../organizationcategoryLocators"
import * as organizationcategoryTestData from "../organizationcategoryTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"




describe('My Login application', async () => {
  let result;
  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.organizationcategory);
    await $(locators.button.addOrganizationcategory).waitForExist();
  });


  it('Add organizationcategory', async () => {
    await func.waitAndClick(locators.button.addOrganizationcategory, 3000);
    result = await func.setUniqueValue(locators.fields.organizationcategoryCode, locators.fields.errorCode);
    console.log("-----------Result---------", result);
    // await func.waitAndFill(locators.fields.organizationcategoryCode, organizationcategoryTestData.organizationcategoryCode, 3000);
    await func.waitAndFill(locators.fields.organizationcategoryDescription, organizationcategoryTestData.description, 3000);
    await func.waitAndClick(locators.button.saveOrganizationcategory, 1000);
    await func.verifySearch(locators.fields.searchOrganizationcategory, result);
  })

  it('Edit organizationcategory', async () => {
    await func.waitAndClick(locators.button.editOrganizationcategory, 3000);
    await func.waitAndFill(locators.fields.organizationcategoryDescription, organizationcategoryTestData.editdescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveOrganizationcategory, 1000);
  })
  it('Inactive Status', async () => {
    await func.verifySearch(locators.fields.searchOrganizationcategory, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
})

