import * as locators from "../policerankLocators"
import * as policerankTestData from "../policerankTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


describe('My Login application', () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.policeRank);
    await $(locators.button.addPolicerank).waitForExist();
  });
  
  it('Add police rank', async () => {
    await $(locators.button.addPolicerank).waitForExist();
    await $(locators.button.addPolicerank).click()
    await browser.pause(3000)
    await $(locators.fields.policerankCode).waitForExist();
    await $(locators.fields.policerankCode).setValue(policerankTestData.policerankCode);
    await browser.pause(3000)   
    await $(locators.fields.description).setValue(policerankTestData.policerankDescription);
    await $(locators.button.savePolicerank).waitForExist()
    await $(locators.button.savePolicerank).click()
    await browser.pause(2000)
   
    await $(locators.fields.searchPolicerank).waitForExist();
    await $(locators.fields.searchPolicerank).setValue(policerankTestData.policerankDescription);
    await browser.pause(2000)
  })

  it('Edit police rank', async () => {
    await $(locators.fields.searchPolicerank).waitForExist();
    await $(locators.fields.searchPolicerank).setValue(policerankTestData.policerankDescription);
    await browser.pause(2000)

    await $(locators.button.editPolicerank).waitForExist()
    await $(locators.button.editPolicerank).click()
    await browser.pause(2000)
    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).setValue(policerankTestData.editpolicerankDescription);
    await browser.pause(2000)
    await $(locators.button.savePolicerank).click()
    await $(locators.fields.searchPolicerank).waitForExist();
    await $(locators.fields.searchPolicerank).setValue(policerankTestData.policerankDescription);
    await $(locators.fields.policerankCode).waitForExist();
    const e = $(locators.fields.policerankCode)
    expect(e).toHaveValue(policerankTestData.policerankDescription, { ignoreCase: false })
  })
});