import * as locators from "../mechanicaldefecttypeLocators"
import * as mechanicaldefecttyeTestData from "../mechanicaldefecttyeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', async () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.mechanicaldefecttype);
    await $(locators.button.addMechanicaldefecttype).waitForExist();
  });

  
  it('Add mechanicaldefecttype', async () => {
    await func.waitAndClick(locators.button.addMechanicaldefecttype, 3000);
    const result = await func.setUniqueValue(locators.fields.mechanicaldefecttypeCode, locators.fields.errorCode, false, 10);
    console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.mechanicaldefecttypeDescription, mechanicaldefecttyeTestData.description1, 5000);
    await func.waitAndClick(locators.button.saveMechanicaldefecttype, 1000);
    await func.verifySearch(locators.fields.searchMechanicaldefecttype, result);
  })

  it('Edit mechanicaldefecttype', async () => {
    await func.waitAndClick(locators.button.editMechanicaldefecttype, 3000);
    await func.waitAndFill(locators.fields.mechanicaldefecttypeDescription, mechanicaldefecttyeTestData.editdescription1, 3000);
    await func.waitAndClick(locators.button.saveMechanicaldefecttype, 1000);
  })
})

