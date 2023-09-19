import parishLocators, * as locators from "../parishLocators"
import * as parishTestData from "../parishTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"




describe('My Login application', async () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.parish);
    await $(parishLocators.button.addParish).waitForExist();
  });

  
  it('Add parish', async () => {
    await func.waitAndClick(locators.button.addParish, 3000);
    const result = await func.setUniqueValue(locators.fields.parishCode, locators.fields.errorCode,true,2);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.parishname, parishTestData.parishName1, 3000);
    await func.waitAndClick(locators.button.saveParish, 1000);
    await func.verifySearch(locators.fields.searchParish, result);
  })

  it('Edit parish', async () => {
    await func.waitAndClick(locators.button.editParish, 3000);
    await func.waitAndFill(locators.fields.parishname, parishTestData.editparishName, 3000);
    await func.waitAndClick(locators.button.saveParish, 1000);
  })
})

