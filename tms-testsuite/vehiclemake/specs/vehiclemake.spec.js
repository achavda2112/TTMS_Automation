import * as locators from "../vehiclemakeLocators"
import * as vehiclemakeTestData from "../vehiclemakeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


//Author: Hiren Kathiria

describe('My Login application', async () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.vehicleMake);
    await $(locators.button.addVehicleMake).waitForExist();
  });

  
  it('Add vehicle make', async () => {
    await func.waitAndClick(locators.button.addVehicleMake, 3000);
    await func.waitAndFill(locators.fields.vehicleMakeCode, vehiclemakeTestData.vehicleCode, 3000);
    await func.waitAndFill(locators.fields.vehicleMakeDescription, vehiclemakeTestData.description, 3000);
    await func.waitAndClick(locators.button.saveVehicleMake, 1000);
    await func.verifySearch(locators.fields.searchVehicleMake, vehiclemakeTestData.description);
  })

  it('Edit vehicle make', async () => {
    await func.verifySearch(locators.fields.searchVehicleMake, vehiclemakeTestData.description);
    await func.waitAndClick(locators.button.editVehicleMake, 3000);
    await func.waitAndFill(locators.fields.vehicleMakeDescription, vehiclemakeTestData.editdescription, 3000);
    await func.waitAndClick(locators.button.saveVehicleMake, 1000);
    await func.verifySearch(locators.fields.searchVehicleMake, vehiclemakeTestData.editdescription);   
  })
})

