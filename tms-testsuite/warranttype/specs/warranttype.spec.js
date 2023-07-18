import * as locators from "../warranttypeLocators"
import * as warranttypeData from "../warranttypeTestData"


import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

describe('My Login application', () => {
  
  before(async () => {
    await func.login(userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.warrantType);
    await $(locators.button.addWarranttype).waitForExist();
  });


  it('Add verdict', async () => {
    await $(locators.button.addWarranttype).waitForExist();
    await $(locators.button.addWarranttype).click();
    await $(locators.fields.cwarranttypeCodeode).waitForExist();
    await $(locators.fields.warranttypeCode).setValue(warranttypeData.warranttypeCode);
    await browser.pause(3000)
    await $(locators.fields.description).setValue(warranttypeData.description);
    warranttypedescription = await $(locators.fields.description).getValue()
    await $(locators.fields.shortDescription).setValue(warranttypeData.shortDescription);
    await $(locators.button.saveWarranttype).waitForExist()
    await $(locators.button.saveWarranttype).click()
    await browser.pause(2000)
    
    await $(locators.fields.searchWarranttype).waitForExist();
    await $(locators.fields.searchWarranttype).setValue(warranttypeData.description);
    
    await browser.pause(2000)
  })

  it('Edit verdict', async () => {
    await $(locators.fields.searchWarranttype).waitForExist();
    await $(locators.fields.searchWarranttype).setValue(warranttype);
    await $("[data-test='warrantTypeEdit']").waitForExist()
    await $("[data-test='warrantTypeEdit']").click()
    await $(locators.fields.description).waitForExist();
    await $(locators.fields.description).setValue(warranttypeData.editdescription);
    await $(locators.fields.shortDescription).setValue(warranttypeData.editshortDescription);
    await browser.pause(2000)
    await $(locators.button.saveWarranttype).click()
    await $(locators.fields.searchWarranttype).waitForExist();
    await $(locators.fields.searchWarranttype).setValue(warranttypeData.editdescription)

    await $(locators.fields.tddescription).waitForExist();
    const e = $(locators.fields.tddescription)
    expect(e).toHaveValue(warranttypeData.editdescription, { ignoreCase: false })
     
    await $(locators.button.addWarranttype).waitForExist();
    await browser.pause(2000)
   
  })
})

