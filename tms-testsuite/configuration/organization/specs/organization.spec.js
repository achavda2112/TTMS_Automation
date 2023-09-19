import * as locators from "../organizationLocators"
import * as organizationTestData from "../organizationTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  let result;


  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.organization);
    await $(locators.button.addorganizationtype).waitForExist();
  });

  it('Add Organization Type', async () => {
    await func.waitAndClick(locators.button.addorganizationtype, 3000);
    await func.waitAndFill(locators.fields.organizationName, organizationTestData.organizationName1, 3000);
    const result = await func.setUniqueValue(locators.fields.organizationCode, locators.fields.errorCode, false, 10);
    console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.nameofMinistry, organizationTestData.nameofMinistry1, 3000);
    await func.waitAndClick(locators.fields.ticketType);
    await func.multiselectDropdown(locators.fields.selectTickettype);
    await func.waitAndFill(locators.fields.levelone, organizationTestData.level1, 3000);
    await func.waitAndClick(locators.fields.addnewRow);
    await func.waitAndFill(locators.fields.leveltwo, organizationTestData.level2, 3000);
    await func.waitAndClick(locators.button.saveorganizationtype,5000);
    await func.verifySearch(locators.fields.searchorganizationtype, result);
  })

   it('Edit Organization Type', async () => {   
     await func.waitAndClick(locators.button.editorganizationtype, 3000);
     await func.waitAndFill(locators.fields.nameofMinistry, organizationTestData.editnameofMinistry, 3000);
     await func.waitAndClick(locators.button.saveorganizationtype, 1000);
   })
});