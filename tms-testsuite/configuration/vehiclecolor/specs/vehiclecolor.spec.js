import * as locators from "../vehiclecolorLocators"
import * as vehiclecolorTestData from "../vehiclecolorTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"



describe('My Login application', async () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.vehicleColor);
    await $(locators.button.addVehicleColor).waitForExist();
  });

  
  it('Add vehicle color', async () => {
    await func.waitAndClick(locators.button.addVehicleColor, 3000);
    result = await func.setUniqueValue(locators.fields.vehicleColorCode, locators.fields.errorCode,6);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.vehicleColorDescription, vehiclecolorTestData.description, 3000);
    await func.waitAndClick(locators.button.saveVehicleColor, 1000);
    await func.verifySearch(locators.fields.searchVehicleColor, result);  })

  it('Edit vehicle color', async () => {
    await func.waitAndClick(locators.button.editVehicleColor, 3000);
    await func.waitAndFill(locators.fields.vehicleColorDescription, vehiclecolorTestData.editdescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveVehicleColor, 1000);
  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchVehicleColor, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
})

