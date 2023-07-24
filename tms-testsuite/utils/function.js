 

import * as logindata from "../login/loginTestData";
import * as loginlocators from "../utils/locator";

import * as userData from "../../utils/testData"

import * as utilLocators from "../../utils/locator"

//Author: Hiren Kathiria

async function waitAndClick(locator, time = 3000) {
    // Wait for locator and click on it
    await $(locator).waitForExist({ timeout: time });
    await $(locator).click();
    await browser.pause(2000);
}

async function waitAndFill(locator, data, time = 10000) {
    // Wait for locator and add data in input fields
    await $(locator).waitForExist({ timeout: time });
    await $(locator).setValue(data);
    await browser.pause(2000);
}

async function verifyText(locator, text) {
    await $(locator).waitForExist();
    await expect($(locator)).toHaveTextContaining(text);
    await browser.pause(2000);
}

async function verifySearch(locator, data) {
    await $(locator).waitForExist();
    await $(locator).setValue(data);
    await browser.pause(2000);
}

async function login(url, username, password) {
      await browser.url(url)
      browser.maximizeWindow()
      await browser.pause(2000)
      await $(utilLocators.fields.username).waitForExist();
      await $(utilLocators.fields.username).setValue(username)
      await $(utilLocators.fields.password).setValue(password)
      await $(utilLocators.button.login).click()
      await browser.pause(2000);
}

async function verifydashboard( ) {

    await $(loginlocators.fields.logo).waitForExist();
    await expect(browser).toHaveUrl(loginlocators.menu.dashboard)
}


async function navigateMenu(locator)
{
    await $(loginlocators.menu.configuration).click()
    await $(locator).waitForExist();
    const elem = await $(locator);
    // scroll to specific element
    await elem.scrollIntoView();

    await $(locator).click()
    await $(locator).waitForExist();
    await browser.pause(2000);
}

export {
    waitAndClick,
    waitAndFill,
    verifyText,
    login,
    navigateMenu,
    verifydashboard,
    verifySearch
    };
