import * as locators from "../policerankLocators"
import * as policerankTestData from "../policerankTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.policeRank);
    await $(locators.button.addPolicerank).waitForExist();
  });
  
  it('Add police rank', async () => {
    await func.waitAndClick(locators.button.addPolicerank, 3000);
    await func.waitAndFill(locators.fields.policerankCode, policerankTestData.policerankCode, 3000);
    await func.waitAndFill(locators.fields.description, policerankTestData.policerankDescription, 3000);
    await func.waitAndClick(locators.button.savePolicerank, 1000);
    await func.verifySearch(locators.fields.searchPolicerank, policerankTestData.policerankDescription);
  })

  it('Edit police rank', async () => {   
    await func.verifySearch(locators.fields.searchPolicerank, policerankTestData.policerankDescription);
    await func.waitAndClick(locators.button.editPolicerank, 3000);
    await func.waitAndFill(locators.fields.description, policerankTestData.editpolicerankDescription, 3000);
    await func.waitAndClick(locators.button.savePolicerank, 1000);
    await func.verifySearch(locators.fields.searchPolicerank, policerankTestData.editpolicerankDescription);   
    })
});