import * as locators from "../idtypeLocators"
import * as idtypeTestData from "../idtypeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


//Author: Akash Chavda  

describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.idType);
    await $(locators.button.addidtype).waitForExist();
  });
  
  it('Add ID Type', async () => {
    await func.waitAndClick(locators.button.addidtype, 3000);
    const result = await func.setUniqueValue(locators.fields.idtypecode, locators.fields.errorCode);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.idtypename, idtypeTestData.idtypename, 3000);
    await func.waitAndFill(locators.fields.description, idtypeTestData.idTypeDescription, 3000);
    await func.setNumbervalue(locators.fields.numberlength,idtypeTestData.numberLengthdata,3000);
    await func.radioButton(locators.fields.validationrequired1, 3000);
    await func.waitAndClick(locators.button.saveidtype, 1000);
    await func.verifySearch(locators.fields.searchidtype, result);
  })

   it('Edit ID Type', async () => {   
    await func.waitAndClick(locators.button.editidtype, 3000);
    await func.waitAndFill(locators.fields.description, idtypeTestData.editidTypeDescription, 3000);
    await func.radioButton(locators.fields.validationrequired, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveidtype, 1000);
  }) 

 /* it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchidtype, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  }) */
 });