import * as locators from "../userMaintenanceLocator"
import * as userMaintenanceTestdata from "../userMaintenanceTestdata"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.security).waitForExist();
    await $(utilLocators.menu.security).click();
    await func.navigateMenu(utilLocators.menu.userMaintenance1);
    await $(locators.button.adduserMaintenance).waitForExist();
  });
  
  it('Add User Maintenanace', async () => {
    await func.waitAndClick(locators.button.adduserMaintenance, 3000);    
    const result = await func.setUniqueValue(locators.fields.userName, locators.fields.errorCode, false, 10);    
    console.log("-----------Result---------", result);
    await func.generateUniqueEmail(locators.fields.email,3000);
    //await func.waitAndFill(locators.fields.email, userMaintenanceTestdata.email, 3000);
     await func.waitAndFill(locators.fields.firstName, userMaintenanceTestdata.fname, 3000);
     await func.waitAndFill(locators.fields.lastName, userMaintenanceTestdata.lname, 3000);
     await func.waitAndFill(locators.fields.middleName, userMaintenanceTestdata.mname, 3000);
     await func.waitAndClick(locators.fields.collapseBasicinfo);
     await func.waitAndFill(locators.fields.password, userMaintenanceTestdata.pwd, 3000);
     await func.waitAndFill(locators.fields.confirmPassword, userMaintenanceTestdata.confirmpwd, 3000);
     await func.selectDropdown(locators.fields.organization, 5, locators.fields.selectOrganization);
     await func.waitAndClick(locators.fields.location);
     await func.waitAndClick(locators.fields.selectLocation);
     await func.waitAndClick(locators.fields.userGroup);
     await func.waitAndClick(locators.fields.userGroup1);
     await func.waitAndClick(locators.fields.userGroup2);
     await func.waitAndClick(locators.button.saveuserMaintenance, 1000);
     await func.verifySearch(locators.fields.searchuserMaintenance, result);
  })

  it('Edit User Maintenance', async () => {   
    await func.waitAndClick(locators.button.edituserMaintenance, 3000);
    await func.waitAndClick(locators.fields.userGroup);
    await func.waitAndClick(locators.fields.userGroup3);
    await func.waitAndClick(locators.button.saveuserMaintenance, 1000);
  })
});