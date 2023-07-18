import parishLocators, * as locators from "../parishLocators"
import * as parishTestData from "../parishTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"



describe('My Login application', async () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.parish);
    await $(parishLocators.button.addParish).waitForExist();
  });

  
  it('Add parish', async () => {
    await func.waitAndClick(locators.button.addParish, 3000);
    await func.waitAndFill(locators.fields.parishCode,parishTestData.parishCode ,3000);
    await func.waitAndFill(locators.fields.parishName,parishTestData.parishName ,3000);
    await func.waitAndClick(locators.button.saveParish, 1000);
    await func.verifySearch(locators.fields.searchParish, parishTestData.parishName);
  })

  it('Edit parish', async () => {
    await func.verifySearch(locators.fields.searchParish, parishTestData.parishName);
    await func.waitAndClick(locators.button.editParish, 3000);
    await func.waitAndFill(locators.fields.parishName,parishTestData.editparishName ,3000);
    await func.waitAndClick(locators.button.saveParish, 1000);
    await func.verifySearch(locators.fields.searchParish, parishTestData.parishName);     
  
    await func.verifyText(locators.fields.parishName, parishTestData.parishName)    
    await browser.pause(2000)
  })

})

