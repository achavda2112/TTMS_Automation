import * as locators from "../countryLocators"
import * as countryTestData from "../countryTestData"

import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.verdict);
    await $(locators.button.addCountry).waitForExist();
  });


  it('Add verdict', async () => {
    await func.waitAndClick(locators.button.addCountry, 3000);
    await func.waitAndFill(locators.fields.countryCode, countryTestData.countryCode, 3000);
    await func.waitAndFill(locators.fields.name, countryTestData.countryDescription, 3000);
    await func.waitAndClick(locators.button.saveCountry, 1000);    
    await func.verifyText(locators.fields.tddescription, countryTestData.countryDescription);
  })

  it('Edit verdict', async () => {
    await func.verifySearch(locators.fields.searchCountry, countryTestData.countryDescription);
    await func.waitAndClick(locators.button.editCountry, 3000);
    await func.waitAndFill(locators.fields.name, countryTestData.editcountryDescription, 3000);
    await func.waitAndClick(locators.button.saveCountry, 1000);
    await func.verifyText(locators.fields.tddescription, countryTestData.editcountryDescription); 
   })
})