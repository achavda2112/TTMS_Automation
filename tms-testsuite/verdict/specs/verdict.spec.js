import * as locators from "../verdictLocators"
import * as verdictTestData from "../verdictTestData"

import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.verdict);
    await $(locators.button.addVerdict).waitForExist();
  });


  it('Add verdict', async () => {
    await func.waitAndClick(locators.button.addVerdict, 3000);
    await func.waitAndFill(locators.fields.verdictCode, verdictTestData.verdictCode, 3000);
    await func.waitAndFill(locators.fields.description, verdictTestData.verdictDescription, 3000);
    await func.waitAndClick(locators.button.saveVerdict, 1000);
    await func.verifySearch(locators.fields.searchVerdict, verdictTestData.verdictDescription);
  })

  it('Edit verdict', async () => {
    await func.verifySearch(locators.fields.searchVerdict, verdictTestData.verdictDescription);
    await func.waitAndClick(locators.button.editVerdict, 3000);
    await func.waitAndFill(locators.fields.description, parishTestData.editparishName, 3000);
    await func.waitAndClick(locators.button.saveVerdict, 1000);
    await func.verifySearch(locators.fields.searchVerdict, verdictTestData.editverdictDescription);   
  })
})