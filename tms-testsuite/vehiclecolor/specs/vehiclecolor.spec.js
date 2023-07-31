import * as locators from "../vehiclecolorLocators"
import * as vehiclecolorTestData from "../vehiclecolorTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


//Author: Hiren Kathiria

describe('My Login application', async () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.vehicleColor);
    await $(locators.button.addVehicleColor).waitForExist();
  });

  
  it('Add vehicle color', async () => {
    await func.waitAndClick(locators.button.addVehicleColor, 3000);
    await func.waitAndFill(locators.fields.vehicleColorCode, vehiclecolorTestData.vehicleCode, 3000);
    await func.waitAndFill(locators.fields.vehicleColorDescription, vehiclecolorTestData.description, 3000);
    await func.waitAndClick(locators.button.saveVehicleColor, 1000);
    await func.verifySearch(locators.fields.searchVehicleColor, vehiclecolorTestData.description);
  })

  it('Edit vehicle color', async () => {
    await func.verifySearch(locators.fields.searchVehicleColor, vehiclecolorTestData.description);
    await func.waitAndClick(locators.button.editVehicleColor, 3000);
    await func.waitAndFill(locators.fields.vehicleColorDescription, vehiclecolorTestData.editdescription, 3000);
    await func.waitAndClick(locators.button.saveVehicleColor, 1000);
    await func.verifySearch(locators.fields.searchVehicleColor, vehiclecolorTestData.editdescription);   
  })
})

