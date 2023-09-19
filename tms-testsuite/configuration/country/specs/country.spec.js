import * as locators from "../countryLocators"
import * as countryTestData from "../countryTestData"

import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.country);
    await $(locators.button.addCountry).waitForExist();
  });

  
  it('Add Country', async () => {
    await func.waitAndClick(locators.button.addCountry, 3000);
    const result = await func.setUniqueValue(locators.fields.countryCode, locators.fields.errorCode);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.name, countryTestData.countryDescription, 3000);
    await func.waitAndClick(locators.button.saveCountry, 1000);
    await func.verifySearch(locators.fields.searchCountry, result);
  })

  it('Edit Country', async () => {
    await func.waitAndClick(locators.button.editCountry, 3000);
    await func.waitAndFill(locators.fields.name, countryTestData.editcountryDescription, 3000);
    await func.waitAndClick(locators.button.saveCountry, 1000);
  })
})