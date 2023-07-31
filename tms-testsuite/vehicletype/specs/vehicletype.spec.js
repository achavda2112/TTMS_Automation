import * as locators from "../vehicletypeLocators"
import * as vehicletypeTestData from "../vehicletypeTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


//Author: Hiren Kathiria

describe('My Login application', async () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.vehicleType);
    await $(locators.button.addVehicleType).waitForExist();
  });

  
  it('Add vehicle type', async () => {
    await func.waitAndClick(locators.button.addVehicleType, 3000);
    await func.waitAndFill(locators.fields.vehicleTypeCode, vehicletypeTestData.vehicleCode, 3000);
    await func.waitAndFill(locators.fields.vehicleTypeDescription, vehicletypeTestData.description, 3000);
    await func.waitAndClick(locators.button.saveVehicleType, 1000);
    await func.verifySearch(locators.fields.searchVehicleType, vehicletypeTestData.description);
  })

  it('Edit vehicle type', async () => {
    await func.verifySearch(locators.fields.searchVehicleType, vehicletypeTestData.description);
    await func.waitAndClick(locators.button.editVehicleType, 3000);
    await func.waitAndFill(locators.fields.vehicleTypeDescription, vehicletypeTestData.editdescription, 3000);
    await func.waitAndClick(locators.button.saveVehicleType, 1000);
    await func.verifySearch(locators.fields.searchVehicleType, vehicletypeTestData.editdescription);   
  })
})

