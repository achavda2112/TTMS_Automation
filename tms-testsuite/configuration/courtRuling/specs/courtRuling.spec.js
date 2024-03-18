import * as locators from "../courtRulingLocators"
import * as courtRulingTestData from "../courtRulingTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.courtRuling);
    await $(locators.button.addcourtRuling).waitForExist();
  });
  
  it('Add Court Ruling', async () => {
    await func.waitAndClick(locators.button.addcourtRuling, 3000);
    await func.selectDropdown(locators.fields.reason1, 3, locators.fields.valueSelect);
    const result = await func.setUniqueValue(locators.fields.courtRulingcode, locators.fields.errorCode,true, 2);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.description, courtRulingTestData.courtRulingDescription, 3000);
    await func.selectDropdown(locators.fields.caseStatus, 2, locators.fields.valueSelect, 2000);
    await func.waitAndClick(locators.fields.applicableProperties, 3000);
    await func.waitAndClick(locators.fields.disqualificationAllowed, 3000);
    await func.waitAndClick(locators.button.savecourtRuling, 1000);
    await func.verifySearch(locators.fields.searchcourtRuling, result);
  })
 
  it('Edit Court Ruling', async () => {   
    await func.waitAndClick(locators.button.editcourtRuling, 3000);
    await func.selectDropdown(locators.fields.reason1, 4, locators.fields.valueSelect);
    await func.waitAndClick(locators.fields.applicableProperties1, 3000);
    await func.waitAndClick(locators.fields.applicableProperties2, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.savecourtRuling, 1000);
  }) 

  it('Inactive Status', async ()=> {
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })

});