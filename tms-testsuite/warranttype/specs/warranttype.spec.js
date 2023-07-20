import * as locators from "../warranttypeLocators"
import * as warranttypeData from "../warranttypeTestData"


import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


//Author: Hiren Kathiria

describe('My Login application', () => {
  
  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.warrantType);
    await $(locators.button.addWarranttype).waitForExist();
  });


  it('Add verdict', async () => {
    await func.waitAndClick(locators.button.addWarranttype, 3000);
    await func.waitAndFill(locators.fields.warranttypeCode, warranttypeData.warranttypeCode, 3000);
    await func.waitAndFill(locators.fields.description, warranttypeData.description, 3000);
    await func.waitAndClick(locators.button.saveWarranttype, 1000);
    await func.verifySearch(locators.fields.searchWarranttype, warranttypeData.description);
  })

  it('Edit verdict', async () => {
    await func.verifySearch(locators.fields.searchWarranttype, warranttypeData.description);
    await func.waitAndClick(locators.button.editWarranttype, 3000);
    await func.waitAndFill(locators.fields.description, warranttypeData.editdescription, 3000);
    await func.waitAndFill(locators.fields.shortDescription, warranttypeData.editshortDescription, 3000);
    await func.waitAndClick(locators.button.saveWarranttype, 1000);
    await func.verifySearch(locators.fields.searchWarranttype, warranttypeData.editdescription);   
    await func.verifyText(locators.fields.tddescription, warranttypeData.editdescription);   
  })
})

