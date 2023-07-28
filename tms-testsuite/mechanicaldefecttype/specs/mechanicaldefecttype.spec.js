import * as locators from "../mechanicaldefecttypeLocators"
import * as mechanicaldefecttyeTestData from "../mechanicaldefecttyeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


//Author: Hiren Kathiria

describe('My Login application', async () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.mechanicaldefecttype);
    await $(locators.button.addMechanicaldefecttype).waitForExist();
  });

  
  it('Add mechanicaldefecttype', async () => {
    await func.waitAndClick(locators.button.addMechanicaldefecttype, 3000);
    await func.waitAndFill(locators.fields.mechanicaldefecttypeCode, mechanicaldefecttyeTestData.mechanicaldefecttypeCode, 3000);
    await func.waitAndFill(locators.fields.mechanicaldefecttypeDescription, mechanicaldefecttyeTestData.description, 3000);
    await func.waitAndClick(locators.button.saveMechanicaldefecttype, 1000);
    await func.verifySearch(locators.fields.searchMechanicaldefecttype, mechanicaldefecttyeTestData.description);
  })

  it('Edit mechanicaldefecttype', async () => {
    await func.verifySearch(locators.fields.searchMechanicaldefecttype, mechanicaldefecttyeTestData.description);
    await func.waitAndClick(locators.button.editMechanicaldefecttype, 3000);
    await func.waitAndFill(locators.fields.mechanicaldefecttypeDescription, mechanicaldefecttyeTestData.editdescription, 3000);
    await func.waitAndClick(locators.button.saveMechanicaldefecttype, 1000);
    await func.verifySearch(locators.fields.searchMechanicaldefecttype, mechanicaldefecttyeTestData.editdescription);   
  })
})

