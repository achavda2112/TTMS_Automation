import * as locators from "../organizationLocationLocators"
import * as organizationLocationTestData from "../organizationLocationTestData"
import * as userData from "../../../utils/testData"

import * as func from "../../../utils/function"
import * as utilLocators from "../../../utils/locator"

//Author: Akash Chavda

describe('My Login application', () => {
  let result;

  before(async () => {
    await func.login(utilLocators.menu.url, userData.username, userData.password);
    await $(utilLocators.menu.configuration).waitForExist();
    await $(utilLocators.menu.configuration).click();
    await func.navigateMenu(utilLocators.menu.organizationLocation);
    await $(locators.button.addorganizationLocation).waitForExist();
  });
  
  it('Add Organization Location', async () => {
    await func.waitAndClick(locators.button.addorganizationLocation, 3000);
    await func.selectDropdown(locators.fields.category1, 2, locators.fields.selectCategory1);
    await func.selectDropdown(locators.fields.organizationType, 2, locators.fields.selectOrganizationType);
    await $(locators.fields.organization).waitForExist();
    await func.waitAndClick(locators.fields.parent, 3000);
    result = await func.setUniqueValue(locators.fields.organizationLocationcode, locators.fields.errorCode,6);
    console.log("-----------Result---------",result);
    await func.waitAndFill(locators.fields.description, organizationLocationTestData.description, 3000);
    await func.waitAndFill(locators.fields.shortDescription, organizationLocationTestData.shortDescription, 3000);
    await func.waitAndFill(locators.fields.mark, organizationLocationTestData.mark, 3000);
    await func.waitAndFill(locators.fields.streetNumber, organizationLocationTestData.streetNumber, 3000);
    await func.waitAndFill(locators.fields.streetName, organizationLocationTestData.streetName, 3000);
    await func.waitAndFill(locators.fields.postalLocation, organizationLocationTestData.postalLocation, 3000);
    await func.waitAndFill(locators.fields.poBox, organizationLocationTestData.poBox, 3000);
    await func.waitAndFill(locators.fields.city, organizationLocationTestData.city, 3000);
    await func.selectDropdown(locators.fields.parish, 2, locators.fields.selectParish);
    await func.waitAndFill(locators.fields.phone1, organizationLocationTestData.phone1, 3000);
    await func.waitAndFill(locators.fields.phone2, organizationLocationTestData.phone2, 3000);
    await func.waitAndFill(locators.fields.fax, organizationLocationTestData.fax, 3000);
    await func.waitAndFill(locators.fields.emailAddress, organizationLocationTestData.emailAddress, 3000);
    await func.waitAndFill(locators.fields.contactPerson, organizationLocationTestData.contactPerson, 3000);
    await func.waitAndClick(locators.button.saveorganizationLocation, 3000);
    await func.verifySearch(locators.fields.searchorganizationLocationcode, result);
  })

  it('Edit event', async () => {   
    await func.waitAndClick(locators.button.editorganizationLocation, 3000);
    await func.selectDropdown(locators.fields.category1, 3, locators.fields.selectCategory1);
    await func.selectDropdown(locators.fields.organizationType, 2, locators.fields.selectOrganizationType);
    await func.waitAndClick(locators.fields.parent, 3000); 
    await func.waitAndClick(locators.fields.Childbutton, 1000);
    await func.waitAndClick(locators.fields.Child, 3000);
    await func.waitAndFill(locators.fields.shortDescription, organizationLocationTestData.shortDescription1, 3000);
    await func.waitAndFill(locators.fields.description, organizationLocationTestData.descriptionUpdated, 3000);
    await func.waitAndFill(locators.fields.mark, organizationLocationTestData.markEdit, 3000);
    await func.waitAndFill(locators.fields.phone1, organizationLocationTestData.phone3, 3000);
    await func.waitAndFill(locators.fields.phone2, organizationLocationTestData.phone4, 3000);
    await func.waitAndFill(locators.fields.emailAddress, organizationLocationTestData.emailAddressUpdated, 3000);
    await func.waitAndClick(locators.button.saveorganizationLocation, 1000);

  })
  it('Inactive Status', async ()=> {
    await func.verifySearch(locators.fields.searchorganizationLocationcode, result);
    await func.waitAndClick(locators.fields.inactiveStatus, 3000);
    await func.waitAndClick(locators.fields.acceptAlert, 3000);
  })
});