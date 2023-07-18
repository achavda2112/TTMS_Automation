import * as locators from "../verdictLocators"
import * as verdictTestData from "../verdictTestData"

import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

describe('My Login application', () => {

  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.verdict);
    await $(locators.button.addVerdict).waitForExist();
  });


  it('Add verdict', async () => {
    await $(locators.button.addVerdict).waitForExist();
    await $(locators.button.addVerdict).click()
    await $(locators.fields.verdictCode).waitForExist();
    await $(locators.fields.verdictCode).setValue(verdictTestData.verdictCode);
    await browser.pause(3000)
    await $(locators.fields.description).setValue(verdictTestData.verdictDescription);
    await $(locators.button.saveVerdict).waitForExist()
    await $(locators.button.saveVerdict).click()
    await browser.pause(2000)
    
    await $(locators.fields.searchVerdict).waitForExist();
    await $(locators.fields.searchVerdict).setValue(verdictTestData.verdictDescription);
    await browser.pause(2000)
  })

  it('Edit verdict', async () => {
    await $(locators.fields.searchVerdict).waitForExist();
    await $(locators.fields.searchVerdict).setValue(verdictTestData.verdictDescription);
    await $(locators.button.editVerdict).waitForExist()
    await $(locators.button.editVerdict).click()
    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).clearValue()
    await $(locators.fields.description).setValue(verdictTestData.editverdictDescription);
    await browser.pause(2000)
    await $(locators.button.saveVerdict).click()
    await $(locators.fields.searchVerdict).waitForExist();
    await $(locators.fields.searchVerdict).setValue(verdictTestData.editverdictDescription)

    await $(locators.fields.tddescription).waitForExist();
    const e = $(locators.fields.tddescription)
    expect(e).toHaveValue(verdictTestData.editverdictDescription, { ignoreCase: false })
    await $(locators.button.addVerdict).waitForExist();
    await browser.pause(2000)
   
  })
})