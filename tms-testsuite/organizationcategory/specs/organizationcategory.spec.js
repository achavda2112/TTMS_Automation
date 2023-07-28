import * as locators from "../organizationcategoryLocators"
import * as organizationcategoryTestData from "../organizationcategoryTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


//Author: Hiren Kathiria

describe('My Login application', async () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.organizationcategory);
    await $(locators.button.addOrganizationcategory).waitForExist();
  });

  
  it('Add organizationcategory', async () => {
    await func.waitAndClick(locators.button.addOrganizationcategory, 3000);
    await func.waitAndFill(locators.fields.organizationcategoryCode, organizationcategoryTestData.organizationcategoryCode, 3000);
    await func.waitAndFill(locators.fields.organizationcategoryDescription, organizationcategoryTestData.description, 3000);
    await func.waitAndClick(locators.button.saveOrganizationcategory, 1000);
    await func.verifySearch(locators.fields.searchOrganizationcategory, organizationcategoryTestData.description);
  })

  it('Edit organizationcategory', async () => {
    await func.verifySearch(locators.fields.searchOrganizationcategory, organizationcategoryTestData.description);
    await func.waitAndClick(locators.button.editOrganizationcategory, 3000);
    await func.waitAndFill(locators.fields.organizationcategoryDescription, organizationcategoryTestData.editdescription, 3000);
    await func.waitAndClick(locators.button.saveOrganizationcategory, 1000);
    await func.verifySearch(locators.fields.searchOrganizationcategory, organizationcategoryTestData.editdescription);   
  })
})

