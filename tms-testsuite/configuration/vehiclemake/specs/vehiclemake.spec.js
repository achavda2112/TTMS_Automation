import * as locators from "../vehiclemakeLocators"
import * as vehiclemakeTestData from "../vehiclemakeTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"


//Author: Akash Chavda

describe('My Login application', async () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.vehicleMake);
    await $(locators.button.addVehicleMake).waitForExist();
  });


  it('Add vehicle make', async () => {
    await func.waitAndClick(locators.button.addVehicleMake, 3000);
    result = await func.setUniqueValue(locators.fields.vehicleMakeCode, locators.fields.errorCode, 6);
    console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.vehicleMakeDescription, vehiclemakeTestData.description, 3000);
    await func.waitAndClick(locators.button.saveVehicleMake, 1000);
    await func.verifySearch(locators.fields.searchVehicleMake, vehiclemakeTestData.description);
  })

  it('Edit vehicle make', async () => {
    await func.verifySearch(locators.fields.searchVehicleMake, result);
    await func.waitAndClick(locators.button.editVehicleMake, 3000);
    await func.waitAndFill(locators.fields.vehicleMakeDescription, vehiclemakeTestData.editdescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveVehicleMake, 1000);
    await func.verifySearch(locators.fields.searchVehicleMake, result);
  })
  it('Inactive Status', async () => {
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
})

