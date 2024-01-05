import * as locators from "../reasonLocators"
import * as reasonTestData from "../reasonTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.reasonType);
    await $(locators.button.addReason).waitForExist();
  });
  
  it('Add Reason', async () => {
    await func.waitAndClick(locators.button.addReason, 3000);
    await func.selectDropdown(locators.fields.reason1, 2, locators.fields.valueSelect);
    const result = await func.setUniqueValue(locators.fields.reasoncode, locators.fields.errorCode,true, 2);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.description, reasonTestData.reasonTypeDescription, 3000);
    await func.waitAndClick(locators.button.saveReason, 1000);
    await func.verifySearch(locators.fields.searchReason, result);
  })

  it('Edit Reason', async () => {   
    await func.waitAndClick(locators.button.editReason, 3000);
    await func.selectDropdown(locators.fields.reason1, 4, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveReason, 1000);
  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchidtype, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
});