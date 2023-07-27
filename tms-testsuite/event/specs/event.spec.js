import * as locators from "../eventLocators"
import * as eventTestData from "../eventTestData"
import * as userData from "../../utils/testData"

import * as func from "../../utils/function"
import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await func.navigateMenu(utilLocators.menu.event);
    await $(locators.button.addEvent).waitForExist();
  });
  
  it('Add event', async () => {
    await func.waitAndClick(locators.button.addEvent, 3000);
    await func.waitAndFill(locators.fields.eventcode, eventTestData.eventCode, 3000);
    await func.waitAndFill(locators.fields.description, eventTestData.eventDescription, 3000);
    await func.waitAndClick(locators.button.saveEvent, 1000);
    await func.verifySearch(locators.fields.searchEvent, eventTestData.eventDescription);
  })

  it('Edit event', async () => {   
    await func.verifySearch(locators.fields.searchEvent, eventTestData.eventDescription);
    await func.waitAndClick(locators.button.editEvent, 3000);
    await func.waitAndFill(locators.fields.description, eventTestData.editeventDescription, 3000);
    await func.waitAndClick(locators.button.saveEvent, 1000);
    await func.verifySearch(locators.fields.searchEvent, eventTestData.editeventDescription);
  })
});