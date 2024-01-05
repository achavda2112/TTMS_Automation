import * as locators from "../vehicletypeLocators"
import * as vehicletypeTestData from "../vehicletypeTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"



describe('My Login application', async () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await browser.pause(2000);
    await func.navigateMenu(utilLocators.menu.vehicleType);
    await $(locators.button.addVehicleType).waitForExist();
  });

  
  it('Add vehicle type', async () => {
    await func.waitAndClick(locators.button.addVehicleType, 3000);
    result = await func.setUniqueValue(locators.fields.vehicleTypeCode, locators.fields.errorCode, false, 2);
    console.log("-----------Result---------", result);
    await func.waitAndFill(locators.fields.vehicleTypeDescription, vehicletypeTestData.description, 3000);
    await func.waitAndClick(locators.button.saveVehicleType, 1000);
    await func.verifySearch(locators.fields.searchVehicleType, result);
  })

  it('Edit vehicle type', async () => {
    await func.waitAndClick(locators.button.editVehicleType, 3000);
    await func.waitAndFill(locators.fields.vehicleTypeDescription, vehicletypeTestData.editdescription, 3000);
    await func.selectDropdown(locators.fields.statusType, 2, locators.fields.valueSelect);
    await func.waitAndClick(locators.button.saveVehicleType, 1000);
})
it('Inactive Status', async ()=> {
  await func.verifySearch(locators.fields.searchVehicleType, result);
  await func.waitAndClick(locators.fields.inactiveStatus, 3000);
  await func.waitAndClick(locators.fields.acceptAlert, 3000);
})
})

