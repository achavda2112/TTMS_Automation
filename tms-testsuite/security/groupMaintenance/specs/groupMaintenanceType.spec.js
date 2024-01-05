import * as locators from "../groupMaintenanceLocator"
import * as groupMaintenanceTestdata from "../groupMaintenanceTestdata"

import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


describe('My Login application', () => {

//   let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.security).waitForExist();
    await $(utilLocators.menu.security).click();
    await func.navigateMenu(utilLocators.menu.groupMaintenance);
    await $(locators.button.addgroupMaintenance).waitForExist();
  });
  
  it('Add Group Maintenanace', async () => {
    await func.waitAndClick(locators.button.addgroupMaintenance, 3000);
    //result = await func.setUniqueValue(locators.fields.groupName, locators.fields.errorCode, false, 10);
   // console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.groupName, groupMaintenanceTestdata.namegroupMaintenance, 3000);
    await func.waitAndFill(locators.fields.description, groupMaintenanceTestdata.descriptionnamegroupMaintenance, 3000);
    await func.waitAndClick(locators.fields.featureAll, 1000);
    await func.waitAndClick(locators.button.savegroupMaintenance, 1000);
    await func.verifySearch(locators.fields.searchgroupMaintenance, groupMaintenanceTestdata.namegroupMaintenance, 3000);
  })

  it('Edit Group Maintenance', async () => {   
    await func.waitAndClick(locators.button.editgroupMaintenance, 3000);
    await func.waitAndFill(locators.fields.description, groupMaintenanceTestdata.editgroupMaintenanceDescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.fields.featureAll, 1000);
    await func.waitAndClick(locators.button.savegroupMaintenance, 1000);
  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchgroupMaintenance, groupMaintenanceTestdata.namegroupMaintenance, 3000);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
});