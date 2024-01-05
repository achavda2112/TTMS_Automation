import * as locators from "../courthearingtypeLocators"
import * as courthearingtypeTestData from "../courthearingtypeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.courthearingtype);
    await $(locators.button.addcourthearingtype).waitForExist();
  });
  
  it('Add court hearing type', async () => {
    await func.waitAndClick(locators.button.addcourthearingtype, 3000);
    const result = await func.setUniqueValue(locators.fields.courthearingtypeCode, locators.fields.errorCode,true);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.description, courthearingtypeTestData.courthearingtypeDescription, 3000);
    await func.waitAndClick(locators.button.savecourthearingtype, 1000);
    await func.verifySearch(locators.fields.searchcourthearingtype,result);
  })

  it('Edit court hearing type', async () => {   
    await func.waitAndClick(locators.button.editcourthearingtype, 3000);
    await func.waitAndFill(locators.fields.description, courthearingtypeTestData.editcourthearingtypeDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.savecourthearingtype, 1000);
  }) 

  it('Inactive Status', async ()=> {
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })

});