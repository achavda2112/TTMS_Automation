import * as locators from "../caseStatusLocators"
import * as caseStatusTestData from "../caseStatusTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.caseStatus);
    await $(locators.button.add).waitForExist();
  });
  
  it('Add Case Status', async () => {
    await func.waitAndClick(locators.button.add, 3000);
    result = await func.setUniqueValue(locators.fields.code, locators.fields.errorCode,true, 2);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.name, caseStatusTestData.name, 2000);
    await func.waitAndFill(locators.fields.description, caseStatusTestData.description, 2000);
    await func.waitAndClick(locators.button.saveCaseStatus, 1000);
    await func.verifySearch(locators.fields.searchCaseStatus, result);
  })

  it('Edit Case Status', async () => {   
    await func.waitAndClick(locators.button.editCaseStatus, 3000);
    await func.waitAndFill(locators.fields.name, caseStatusTestData.nameEdited, 2000);
    await func.waitAndFill(locators.fields.description, caseStatusTestData.descriptionEdit, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveCaseStatus, 1000);
    await func.verifySearch(locators.fields.searchCaseStatus, result);
  })

  it('Inactive Status', async ()=> {
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
  
}); 