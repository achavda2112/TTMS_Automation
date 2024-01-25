import * as locators from "../dashboardLocators"
import * as userData from "../../utils/testData"
import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"


describe('My Login application', () => {

  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
  });
  
  it('select drop-down', async () => {
    await func.selectDropdown(locators.fields.dropdown1, 2, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.dropdown2, 2, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.dropdown3, 2, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.dropdown4, 2, locators.fields.valueSelect);
    await func.selectDropdown(locators.fields.dropdown5, 2, locators.fields.valueSelect);
  })
}); 