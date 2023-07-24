import * as locators from "../offendertypeLocators"
import * as offendertypeTestData from "../offendertypeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.offendertype);
    await $(locators.button.addPolicerank).waitForExist();
  });
  
  it('Add offendertype', async () => {
    await func.waitAndClick(locators.button.addOffendertype, 3000);
    await func.waitAndFill(locators.fields.description, offendertypeTestData.offenderTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveOffendertype, 1000);
    await func.verifyText(locators.fields.tddescription, offendertypeTestData.offenderTypeDescription);
  })

  it('Edit offendertype', async () => {   
    await func.verifySearch(locators.fields.searchOffendertype, offendertypeTestData.offenderTypeDescription);
    await func.waitAndClick(locators.button.editOffendertype, 3000);
    await func.waitAndFill(locators.fields.description, offendertypeTestData.editoffenderTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveOffendertype, 1000);
    await func.verifyText(locators.fields.tddescription, offendertypeTestData.editoffenderTypeDescription);
  })
});