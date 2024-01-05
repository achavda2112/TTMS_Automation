import * as locators from "../warranttypeLocators"
import * as warranttypeData from "../warranttypeTestData"
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
    await func.navigateMenu(utilLocators.menu.warrantType);
    await $(locators.button.addWarranttype).waitForExist();
  });


  it('Add warranttype', async () => {
    await func.waitAndClick(locators.button.addWarranttype, 3000);
    result = await func.setUniqueValue(locators.fields.warranttypeCode, locators.fields.errorCode, false , 6);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.description, warranttypeData.description, 3000);
    await func.waitAndFill(locators.fields.shortDescription, warranttypeData.shortDescription,3000)
    await func.waitAndClick(locators.button.saveWarranttype, 1000);
    await func.verifySearch(locators.fields.searchWarranttype, result);
  })

  it('Edit warranttype', async () => {
    await func.waitAndClick(locators.button.editWarranttype, 3000);
    await func.waitAndFill(locators.fields.description, warranttypeData.editdescription, 3000);
    await func.waitAndFill(locators.fields.shortDescription, warranttypeData.editshortDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveWarranttype, 1000);
    await func.verifySearch(locators.fields.searchWarranttype, result);
  })
  it('Inactive Status', async ()=> {
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
})

