import * as locators from "../editRequestLocators"
import * as editRequestTestData from "../editRequestTestData"
import * as userData from "../../../utils/testData"
import * as func from "../../../utils/function"
import locator, * as utilLocators from "../../../utils/locator"



describe('My Login application', () => {

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.ticketProcessing1).waitForExist();
    await $(utilLocators.menu.ticketProcessing1).click();
    await browser.pause(2000);
    await func.navigateMenu(utilLocators.menu.editRequest);
  });
   it('approve edit request', async () => {
    await func.waitAndFill(locators.fields.editSearch, editRequestTestData.ticketSearch, 2000);
    await func.waitAndClick(locators.fields.view, 2000);
    await func.waitAndClick(locators.button.approve, 2000);
    await func.waitAndFill(locators.fields.comments, editRequestTestData.CommentsApprove, 2000);
    await func.waitAndClick(locators.fields.ok, 2000);
})
  it('Reject Edit Request', async () => {
    await func.waitAndFill(locators.fields.editSearch, editRequestTestData.TicketSearch2, 2000);
    await func.waitAndClick(locators.fields.view, 2000);
    await func.waitAndClick(locators.button.reject, 2000);
    await func.waitAndFill(locators.fields.comments, editRequestTestData.CommentsReject, 2000);
    await func.waitAndClick(locators.fields.ok, 2000);
    
 })
})