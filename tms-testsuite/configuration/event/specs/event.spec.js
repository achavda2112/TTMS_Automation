import * as locators from "../eventLocators"
import * as eventTestData from "../eventTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.event);
    await $(locators.button.addEvent).waitForExist();
  });
  
  it('Add event', async () => {
    await func.waitAndClick(locators.button.addEvent, 3000);
    const result = await func.setUniqueValue(locators.fields.eventcode, locators.fields.errorCode,false,10);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.description, eventTestData.eventDescription, 3000);
    await func.waitAndClick(locators.button.saveEvent, 1000);
    await func.verifySearch(locators.fields.searchEvent, result);
  })

  it('Edit event', async () => {   
    await func.waitAndClick(locators.button.editEvent, 3000);
    await func.waitAndFill(locators.fields.description, eventTestData.editeventDescription, 3000);
    await func.waitAndClick(locators.button.saveEvent, 1000);
  })
});