import * as locators from "../verdictLocators"
import * as verdictTestData from "../verdictTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await browser.pause(2000);
    await func.navigateMenu(utilLocators.menu.verdict);
    await $(locators.button.addVerdict).waitForExist();
  });


  it('Add verdict', async () => {
    await func.waitAndClick(locators.button.addVerdict, 3000);
    result = await func.setUniqueValue(locators.fields.verdictCode, locators.fields.errorCode, false, 2);
    console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.description, verdictTestData.verdictDescription, 3000);
    await func.waitAndClick(locators.button.saveVerdict, 1000);
    await func.verifySearch(locators.fields.searchVerdict, result);
  })

  it('Edit verdict', async () => {
    await func.waitAndClick(locators.button.editVerdict, 3000);
    await func.waitAndFill(locators.fields.description, verdictTestData.editverdictDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveVerdict, 1000);
  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchVerdict, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
})