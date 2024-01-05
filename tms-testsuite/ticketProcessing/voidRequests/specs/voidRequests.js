import * as locators from "../voidRequestsLocators"
import * as voidRequestTestData from "../voidRequestsTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.ticketProcessing1).waitForExist();
    await $(utilLocators.menu.ticketProcessing1).click();
    await browser.pause(2000);
    await func.navigateMenu(utilLocators.menu.voidRequest);
  });
   it('approve void request', async () => {
    await func.waitAndClick(locators.button.approve, 2000);
    await func.waitAndFill(locators.fields.comment, voidRequestTestData.comment, 2000);
    await func.waitAndClick(locators.button.save, 2000);

   })
  it('Reject void Request', async () => {
    await func.waitAndClick(locators.button.reject, 2000);
    await func.waitAndFill(locators.fields.comment, voidRequestTestData.comment, 2000);
    await func.waitAndClick(locators.button.Cancel, 2000);
    
 })
})